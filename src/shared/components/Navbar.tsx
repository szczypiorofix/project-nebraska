import React from 'react';
import styled from 'styled-components';

import { Props } from '../models/models';

const CustomNavbar = styled.nav`
    margin: 0 auto;
`;

export const Navbar: React.FC<Props>= ( props: Props ) => {
    return <CustomNavbar>
        {props.children}
    </CustomNavbar>
}
