import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Back, BackProps } from './index';

export default {
    component: Back,
    title: 'Back/Back',
} as Meta;

const Back_: Story<BackProps> = (args) => <Back {...args} />;
export const Primary = Back_.bind({});
Primary.args = {
    
} as BackProps;
