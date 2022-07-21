import React, { FC } from 'react';

import { ButtonProps } from './Button.types';

// bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded

// bg-transparent hover:bg-slate-100 text-slate-900 font-semibold py-2 px-4 hover:border-transparent rounded

const Button: FC<ButtonProps> = ({
    children,
    disabled = false,
    onClick,
    size = 'md',
    variant = 'primary',
    ...props
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            {...props}
            className="bg-slate-500"
        >
            {children}
        </button>
    );
};

export default Button;
