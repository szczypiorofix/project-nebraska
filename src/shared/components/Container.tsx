import React from 'react';
import styled from 'styled-components';

import { ContainerProps, Props } from '../models/models';

const CustomContainer = styled.div<{ $flex?: boolean }>`
    width: 100%;
    display: ${ (props) => props.$flex ? "flex" : 'block' };
    margin: 10px 0;
`;

export const Container: React.FC<Props & ContainerProps>= ( props: Props & ContainerProps ) => {
    return <CustomContainer $flex = {!!props.flex}>
        { props.children }
    </CustomContainer>
}
