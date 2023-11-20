import React from 'react';
import styled from 'styled-components';

export interface NetworkIndicatorProps {
    isActive?: boolean;
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

const NetworkSignal= styled.div<{ $active?: boolean }>`
    width: 12px;
    height: 12px;
    background-color: ${ props => props.$active ? "green" : 'red' };
    border: none;
    border-radius: 50%;
`;

export const NetworkIndicator = ( props: NetworkIndicatorProps ): React.JSX.Element => {
    return <NetworkSignalContainer>
        <NetworkSignalLabel>Network: </NetworkSignalLabel>
        <NetworkSignal $active={props.isActive}/>
    </NetworkSignalContainer>
}
