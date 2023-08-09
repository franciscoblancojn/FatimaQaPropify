import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreateMassiveWorkers, BoxCreateMassiveWorkersProps } from './index';

export default {
    component: BoxCreateMassiveWorkers,
    title: 'BoxCreate/BoxCreateMassiveWorkers',
} as Meta;

const BoxCreateMassiveWorkers_: Story<BoxCreateMassiveWorkersProps> = (args) => <BoxCreateMassiveWorkers {...args} />;
export const Primary = BoxCreateMassiveWorkers_.bind({});
Primary.args = {
    
} as BoxCreateMassiveWorkersProps;
