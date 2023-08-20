import React from 'react';
import {
    InputPassword as FenextInputPassword,
    InputPasswordProps as FenextInputPasswordProps,
} from 'fenextjs-component/cjs/Input/Password';

export interface InputPasswordProps extends FenextInputPasswordProps {
    styleTemplate?: 'InputPassword1';
}
export const InputPassword = ({
    styleTemplate = 'InputPassword1',
    ...props
}: InputPasswordProps) => {
    return (
        <FenextInputPassword
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
