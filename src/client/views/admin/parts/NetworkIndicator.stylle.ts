import styled from 'styled-components';

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

export {
    NetworkSignalContainer,
    NetworkSignalLabel,
    NetworkSignal
}
