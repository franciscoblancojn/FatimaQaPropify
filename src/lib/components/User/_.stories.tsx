import React from 'react';
import { Story, Meta } from '@storybook/react';
import { User, UserProps } from './index';

export default {
    component: User,
    title: 'User/User',
} as Meta;

const User_: Story<UserProps> = (args) => <User {...args} />;
export const Primary = User_.bind({});
Primary.args = {
    user: {
        img:"https://thumbs.dreamstime.com/b/user-profile-grey-icon-web-avatar-employee-symbol-user-profile-grey-icon-web-avatar-employee-symbol-sign-illustration-design-191067342.jpg",
        name:"Josh Fenwick",
        email:"Josh@fenwickrealtytrust.com",


    }

} as UserProps;
