import React from 'react';

export interface ComponentStyleProps {
    color: string;
    backgroundColor: string;
    margin: string;
    padding: string;
}

export type Props = {
    children?: string | React.JSX.Element | React.JSX.Element[];
};

export type ContainerProps = {
    flex?: boolean;
}
