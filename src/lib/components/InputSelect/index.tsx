import React from 'react';
import {
    InputSelect as FenextInputSelect,
    InputSelectProps as FenextInputSelectProps,
} from 'fenextjs-component/cjs/Input/Select/';

export interface InputSelectProps extends FenextInputSelectProps {
    styleTemplate?: 'InputSelect1';
}
export const InputSelect = ({
    styleTemplate = 'InputSelect1',
    ...props
}: InputSelectProps) => {
    return (
        <FenextInputSelect
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
            showOptions="focus"
            hiddenOptions="not-focus"
        />
    );
};
