import React from 'react';
import {
    Text as FenextButton,
    TextProps as FenextTextProps,
} from 'fenextjs-component/cjs/Text';

export interface TextProps extends FenextTextProps {
    styleTemplate ?: 'Title1' | 'Title2' | 'Title3' | 'Title4' | 'Title5' | 'Text1'|'Text2' | 'Text3' | 'Text4' | 'Text5' ;
    
}
export const Text = ({ styleTemplate = 'Title1', ...props }: TextProps) => {
    return (
        <FenextButton
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
