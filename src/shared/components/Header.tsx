import React from 'react';
import { Props } from '../models/models';

export const Header: React.FC<Props>= ( props: Props ) => {
    return <header>
        {props.children}
    </header>
}

