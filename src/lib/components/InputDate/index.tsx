import React from 'react';
import {
    InputDate as FenextInputDate,
    InputDateProps as FenextInputDateProps,
} from 'fenextjs-component/cjs/Input/Date';

export interface InputDateProps extends FenextInputDateProps {
    styleTemplate?: 'InputDate1';
}
export const InputDate = ({
    styleTemplate = 'InputDate1',
    ...props
}: InputDateProps) => {
    return (
        <FenextInputDate
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
