import React from 'react';
import styled from 'styled-components';

import { Props } from '../models/models';

const NavbarStyled = styled.nav`
    margin: 0 auto;
`;

const NavbarTitle = styled.h1`
    color: darkblue;
`;

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
