import React from 'react';
import {
    InputText as FenextInput,
    InputTextProps as FenextInputProps,
} from 'fenextjs-component/cjs/Input/Text';

export interface InputProps extends FenextInputProps {
    styleTemplate?: 'Input1';
}
export const Input = ({ styleTemplate = 'Input1', ...props }: InputProps) => {
    return (
        <FenextInput
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
