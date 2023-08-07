import React from 'react';
import {
    Box as FenextBox,
    BoxProps as FenextBoxProps,
} from 'fenextjs-component/cjs/Box';

export interface BoxProps extends FenextBoxProps {
    styleTemplate?: 'Box1';
}
export const Box = ({ styleTemplate = 'Box1', ...props }: BoxProps) => {
    return (
        <FenextBox
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
