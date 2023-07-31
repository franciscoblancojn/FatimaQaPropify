import React from 'react';
import {
    User as FenextUser,
    UserProps as FenextUserProps,
} from 'fenextjs-component/cjs/User';

export interface UserProps extends FenextUserProps {
    styleTemplate?: 'User1';
}
export const User = ({ styleTemplate = 'User1', ...props }: UserProps) => {
    return (
        <FenextUser
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
