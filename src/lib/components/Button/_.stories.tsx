import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './index';

export default {
    component: Button,
    title: 'Button/Button',
} as Meta;

const Button_: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary = Button_.bind({});
Primary.args = {
    children:"test",
    full:false,
    size:"extra-small",
    styleTemplate:"btn1",
    disabled:false
} as ButtonProps;
