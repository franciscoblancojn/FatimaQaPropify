import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './index';

export default {
    component: Input,
    title: 'Input/Input',
} as Meta;

const Input_: Story<InputProps> = (args) => <Input {...args} />;
export const Primary = Input_.bind({});
Primary.args = {
    
} as InputProps;
