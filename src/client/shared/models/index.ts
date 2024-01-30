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

export interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number, array: T[]) => React.ReactNode;
}

export interface ButtonProps {
    title: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: string | React.JSX.Element | React.JSX.Element[];
}

export type ContainerProps = {
    flex?: boolean;
}
