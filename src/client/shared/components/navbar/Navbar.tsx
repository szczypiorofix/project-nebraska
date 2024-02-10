import React from 'react';

import { Props } from '../../models';
import { NavbarStyled, NavbarTitle } from './Navbar.style';

interface NavbarProps {
    title?: string;
}

const Navbar: React.FC<Props & NavbarProps>= (props: Props & NavbarProps) => {
    return <NavbarStyled>
        {props.title && <NavbarTitle>{props.title}</NavbarTitle>}
        {props.children}
    </NavbarStyled>
}

export default Navbar;
