import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputPassword, InputPasswordProps } from './index';

export default {
    component: InputPassword,
    title: 'InputPassword/InputPassword',
} as Meta;

const InputPassword_: Story<InputPasswordProps> = (args) => <InputPassword {...args} />;
export const Primary = InputPassword_.bind({});
Primary.args = {
    label:"Password",
    placeholder:"Password"
} as InputPasswordProps;
