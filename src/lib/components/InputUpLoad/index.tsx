import React from 'react';
import {
    InputUpload as FenextInputUpload,
    InputUploadProps as FenextInputUploadProps,
} from 'fenextjs-component/cjs/Input/Upload';

export interface InputUploadProps extends FenextInputUploadProps {
    styleTemplate?: 'InputUpload1';
}
export const InputUpload = ({
    styleTemplate = 'InputUpload1',
    ...props
}: InputUploadProps) => {
    return (
        <FenextInputUpload
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
