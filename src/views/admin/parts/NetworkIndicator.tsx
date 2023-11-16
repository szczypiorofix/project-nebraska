import React from 'react';
import styled from 'styled-components';

const NetworkSignal= styled.div<{ props: boolean }>`
    width: 12px;
    height: 12px;
    background-color: ${ props => props.props ? "green" : 'red' };
    border: none;
    border-radius: 50%;
`;

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

export interface NetworkIndicatorProps {
    active?: boolean;
}

export const NetworkIndicator = ( props: NetworkIndicatorProps ): React.JSX.Element => {
    return <NetworkSignalContainer>
        <NetworkSignalLabel>Network: </NetworkSignalLabel>
        <NetworkSignal props={ props.active }/>
    </NetworkSignalContainer>
}
