import React from 'react';

import { Props } from '../../models';
import { CustomRow } from './Row.style';

const Row: React.FC<Props>= (props: Props) => {
    return <CustomRow>
        {props.children}
    </CustomRow>
}

export default Row;
