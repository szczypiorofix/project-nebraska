import React from 'react';
import styled from 'styled-components';
import { CONNECTION_STATUS } from '../../../../shared/response.model';

export interface NetworkIndicatorProps {
    status: CONNECTION_STATUS;
}

const NetworkSignalContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NetworkSignalLabel = styled.p`
    margin: 0;
    padding: 8px 12px;
`;

const NetworkSignal= styled.div<{ $statusColor?: string }>`
    width: 12px;
    height: 12px;
    background-color: ${ props => props.$statusColor };
    border: none;
    border-radius: 50%;
`;

export const NetworkIndicator = ( props: NetworkIndicatorProps ): React.JSX.Element => {
    const statusResolver = (status: CONNECTION_STATUS): string => {
      switch (status) {
        case CONNECTION_STATUS.CONNECTING:
          return "yellow";
        case CONNECTION_STATUS.CONNECTED:
            return "green";
        default:
          return "red";
      }
    };

    return <NetworkSignalContainer>
        <NetworkSignalLabel>Network: </NetworkSignalLabel>
        <NetworkSignal $statusColor={ statusResolver( props.status ) }/>
    </NetworkSignalContainer>
}
