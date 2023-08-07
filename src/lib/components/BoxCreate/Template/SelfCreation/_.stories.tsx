import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreateSelfCreation, BoxCreateSelfCreationProps } from './index';

export default {
    component: BoxCreateSelfCreation,
    title: 'BoxCreate/BoxCreateSelfCreation',
} as Meta;

const BoxCreateSelfCreation_: Story<BoxCreateSelfCreationProps> = (args) => <BoxCreateSelfCreation {...args} />;
export const Primary = BoxCreateSelfCreation_.bind({});
Primary.args = {
    
} as BoxCreateSelfCreationProps;
