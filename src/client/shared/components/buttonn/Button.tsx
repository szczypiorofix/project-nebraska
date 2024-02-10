import React from 'react';

import { ButtonProps } from '../../models';
import { ButtonStyleProps, CustomButton } from './Button.stylle';

const Button: React.FC<ButtonProps> = (props: ButtonProps): React.JSX.Element => {
    return<CustomButton
        $buttonProps={ButtonStyleProps}
        onClick={props.onClick}
    >{props.title}</CustomButton>
}

export default Button;
