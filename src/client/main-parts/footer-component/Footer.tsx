import React from 'react';

import { ContainerProps, Props } from '../../shared/models';
import { CustomFooter } from './Footer.style';

export const Footer: React.FC<Props & ContainerProps> = (props: Props) => {
    return <CustomFooter>
        { props.children }
    </CustomFooter>
}
