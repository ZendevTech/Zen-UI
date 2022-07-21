import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
    children,
    disabled = false,
    onClick,
    size = 'md',
    variant = 'primary',
    ...props
}: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
