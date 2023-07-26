import React from 'react';
import {
    Menu as FenextMenu,
    MenuProps as FenextMenuProps,
} from 'fenextjs-component/cjs/Header/Menu';

export interface MenuProps extends FenextMenuProps {
    styleTemplate?: 'Menu';
}
export const Menu = ({ styleTemplate = 'Menu', ...props }: MenuProps) => {
    return (
        <FenextMenu
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
