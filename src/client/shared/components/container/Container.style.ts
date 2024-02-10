import styled from 'styled-components';

const CustomContainer = styled.div<{ $flex?: boolean }>`
    display: ${ (props) => props.$flex ? "flex" : 'block' };
`;

export { CustomContainer };
