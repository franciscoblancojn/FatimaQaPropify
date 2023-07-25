import React from 'react';
import {
    InputSwich as FenextInputSwich,
    InputSwichProps as FenextInputSwichProps,
} from 'fenextjs-component/cjs/Input/Swich';

export interface InputSwichProps extends FenextInputSwichProps {
    styleTemplate?: 'Swicht1';
}
export const InputSwich = ({
    styleTemplate = 'Swicht1',
    ...props
}: InputSwichProps) => {
    return (
        <FenextInputSwich
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
