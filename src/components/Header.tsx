import React from 'react';
import { Props } from '../shared/models/models';
import styled from 'styled-components';

const HeaderComponent = styled.header`
    min-height: 64px;
`;

export const Header: React.FC<Props>= (props: Props) => {
    return <HeaderComponent>
        {props.children}
    </HeaderComponent>
}

