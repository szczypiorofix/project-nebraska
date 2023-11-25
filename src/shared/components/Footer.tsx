import React from 'react';
import { Props } from '../models/models';

export const Footer: React.FC<Props>= ( props: Props ) => {

    return <footer>
        { props.children }
    </footer>
}
