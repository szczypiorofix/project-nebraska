import React from 'react';
import { ContainerProps, Props } from '../../shared/models/models';
import styled from 'styled-components';

const CustomFooter = styled.footer`
    display: block;
    width: 100%;
    background-color: #FFFFFF;
`;

export const Footer: React.FC<Props & ContainerProps> = (props: Props) => {
    return <CustomFooter>
        { props.children }
    </CustomFooter>
}
