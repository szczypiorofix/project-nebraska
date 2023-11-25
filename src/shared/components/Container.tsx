import React from 'react';
import styled from 'styled-components';

import { Props } from '../models/models';

const CustomContainer = styled.div`
    width: 100%;
    display: block;
    margin: 10px 0;
`;

export const Container: React.FC<Props>= ({ children }) => {
    return <CustomContainer>
        { children }
    </CustomContainer>
}
