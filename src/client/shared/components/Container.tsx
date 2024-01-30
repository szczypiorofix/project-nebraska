import React from 'react';
import styled from 'styled-components';

import { ContainerProps, Props } from '../models/models';

const CustomContainer = styled.div<{ $flex?: boolean }>`
    display: ${ (props) => props.$flex ? "flex" : 'block' };
`;

export const Container: React.FC<Props & ContainerProps>= (props: Props & ContainerProps) => {
    return <CustomContainer $flex = {!!props.flex}>
        { props.children }
    </CustomContainer>
}
