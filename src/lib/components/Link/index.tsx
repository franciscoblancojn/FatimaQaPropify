import React from 'react';
import {
    Link as FenextLink,
    LinkProps as FenextLinkProps,
} from 'fenextjs-component/cjs/Link/';

export interface LinkProps extends FenextLinkProps {
    styleTemplate?: 'Link1';
}
export const Link = ({ styleTemplate = 'Link1', ...props }: LinkProps) => {
    return (
        <FenextLink
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
