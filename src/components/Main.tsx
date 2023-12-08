import React from 'react';
import styled from 'styled-components';

import { ContainerProps, Props } from '../shared/models/models';

const CustomMain = styled.main`
    display: block;
    width: 100%;
`;

export const Main: React.FC<Props & ContainerProps>= (props: Props) => {
    return <CustomMain>
        { props.children }
    </CustomMain>
}