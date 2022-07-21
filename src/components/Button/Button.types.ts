import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
    /**
     * a React node to render inside the button.
     */
    children: ReactNode;
    /**
     * whether the button is colored and clickable.
     */
    disabled?: boolean;
    /**
     * a callback function to trigger when the button is clicked.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * determines the height, width, and padding of the button.
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * determines the coloring of the button to indicate importance.
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'transparent';
    /**
     * all other props get passed through to the button.
     */
    [propName: string]: any;
}
