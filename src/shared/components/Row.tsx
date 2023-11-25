import React from 'react';
import styled from 'styled-components';

import { Props } from '../models/models';

const CustomRow = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const Row: React.FC<Props>= ({ children }) => {
    return <CustomRow>
        { children }
    </CustomRow>
}
