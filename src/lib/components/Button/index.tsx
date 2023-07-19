import React from 'react';
import {
    Button as FenextButton,
    ButtonProps as FenextButtonProps,
} from 'fenextjs-component/cjs/Button';

export interface ButtonProps extends FenextButtonProps {
    styleTemplate?: 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5' | 'btn6';
    size?: FenextButtonProps['size'];
}
export const Button = ({ styleTemplate = 'btn1', ...props }: ButtonProps) => {
    return (
        <FenextButton
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
