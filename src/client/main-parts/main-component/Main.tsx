import React from 'react';
import styled from 'styled-components';

import { ContainerProps, Props } from '../../shared/models';

const CustomMain = styled.main`
    display: block;
    width: 100%;
    background-color: #F3F4F7;
`;

export const Main: React.FC<Props & ContainerProps>= (props: Props) => {
    return <CustomMain>
        { props.children }
    </CustomMain>
}
