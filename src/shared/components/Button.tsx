import React from 'react';
import styled from 'styled-components';

import { ComponentStyleProps } from '../models/models';

export interface ButtonProps {
    title: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = styled.button<{ $buttonProps?: ComponentStyleProps; }>`
  padding: 0.5em 1.5em;
  color: ${props => props.$buttonProps.color};
  background: ${props => props.$buttonProps.backgroundColor};
  cursor: pointer;
  display: inline-flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: transparent solid 2px;
  outline-offset: 2px;
  width: auto;
  line-height: 1.2;
  border-radius: 12px;
  margin-inline-end: 0;
  margin: 0 0.5em;
  margin-inline-start: 2px;
  font-size: 18px;
`;

const styleProps: ComponentStyleProps = {
    color: "#EEEEEE",
    backgroundColor: "#4318FF",
    margin: "0",
    padding: "0"
}

export const Button = ( props: ButtonProps ): React.JSX.Element => {
    return<CustomButton
        $buttonProps={styleProps}
        onClick={props.onClick}
    >{props.title}</CustomButton>
}
