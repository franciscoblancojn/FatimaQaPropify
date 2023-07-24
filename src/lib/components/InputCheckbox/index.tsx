import React from 'react';
import {
    InputCheckbox as FenextInputCheckbox,
    InputCheckboxProps as FenextInputCheckboxProps,
} from 'fenextjs-component/cjs/Input/Checkbox/';

export interface InputCheckboxProps extends FenextInputCheckboxProps {
    styleTemplate?: 'InputCheckbox1';
}
export const InputCheckbox = ({
    styleTemplate = 'InputCheckbox1',
    ...props
}: InputCheckboxProps) => {
    return (
        <FenextInputCheckbox
            {...props}
            classNameLabel={`${styleTemplate} ${props?.classNameLabel ?? ''}`}
        />
    );
};
