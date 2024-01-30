import React from 'react';

import { ContainerProps, Props } from '../../models';
import { CustomContainer } from './Container.style';

const Container: React.FC<Props & ContainerProps>= (props: Props & ContainerProps) => {
    return <CustomContainer $flex = {!!props.flex}>
        { props.children }
    </CustomContainer>
}

export default Container;
