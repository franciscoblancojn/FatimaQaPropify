import React from 'react';
import {
    ModalBase as FenextModal,
    ModalBaseProps as FenextModalProps,
} from 'fenextjs-component/cjs/Modal/Base';

export interface ModalProps extends FenextModalProps {
    styleTemplate?: 'Modal';
}
export const Modal = ({ styleTemplate = 'Modal', ...props }: ModalProps) => {
    return (
        <FenextModal
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
