import React from 'react';
import {
    MediaInput as FenextMediaInput,
    MediaInputProps as FenextMediaInputProps,
} from 'fenextjs-component/cjs/Media/Input';

export interface MediaInputProps extends FenextMediaInputProps {
    styleTemplate?: 'MediaInput1';
}
export const MediaInput = ({
    styleTemplate = 'MediaInput1',
    ...props
}: MediaInputProps) => {
    return (
        <FenextMediaInput
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
