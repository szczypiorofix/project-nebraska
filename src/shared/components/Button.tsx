import React from 'react';
import styled from 'styled-components';

import { ComponentStyleProps } from '../models/models';

export interface ButtonProps {
    title: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = styled.button<{ $buttonProps?: ComponentStyleProps; }>`
    padding: 0.5em;
    margin: 0.5em;
    color: ${ props => props.$buttonProps.color || "#BF4F74" };
    background: ${ props => props.$buttonProps.backgroundColor };
    border: none;
    cursor: pointer;
    border-radius: 4px;
`;

const styleProps: ComponentStyleProps = {
    color: "#111111",
    backgroundColor: "#AAAAAA",
    margin: "0",
    padding: "0"
}

export const Button = ( props: ButtonProps ): React.JSX.Element => {
    return<CustomButton
        $buttonProps={ styleProps }
        onClick={ props.onClick }
    >{props.title}</CustomButton>
}
