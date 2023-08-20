import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputPersonalDetails, InputPersonalDetailsProps } from './index';

export default {
    component: InputPersonalDetails,
    title: 'InputPersonalDetails/InputPersonalDetails',
} as Meta;

const InputPersonalDetails_: Story<InputPersonalDetailsProps> = (args) => <InputPersonalDetails {...args} />;
export const Primary = InputPersonalDetails_.bind({});
Primary.args = {
    
} as InputPersonalDetailsProps;
