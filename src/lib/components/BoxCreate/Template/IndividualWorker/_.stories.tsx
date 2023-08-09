import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreateIndividualWorker, BoxCreateIndividualWorkerProps } from './index';

export default {
    component: BoxCreateIndividualWorker,
    title: 'BoxCreate/BoxCreateIndividualWorker',
} as Meta;

const BoxCreateIndividualWorker_: Story<BoxCreateIndividualWorkerProps> = (args) => <BoxCreateIndividualWorker {...args} />;
export const Primary = BoxCreateIndividualWorker_.bind({});
Primary.args = {
    
} as BoxCreateIndividualWorkerProps;
