import React from 'react';
import {
    ButtonMenu as FenextButtonMenu,
    ButtonMenuProps as FenextButtonMenuProps,
} from 'fenextjs-component/cjs/Header/ButtonMenu';
import { Logo } from '../../svg/logo';

export interface ButtonMenuProps extends FenextButtonMenuProps {
    styleTemplate?: 'ButtonMenu';
}
export const ButtonMenu = ({
    styleTemplate = 'ButtonMenu',
    ...props
}: ButtonMenuProps) => {
    return (
        <FenextButtonMenu
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        >
            <Logo />
        </FenextButtonMenu>
    );
};
