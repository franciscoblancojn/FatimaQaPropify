import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreateIndividualUnits, BoxCreateIndividualUnitsProps } from './index';

export default {
    component: BoxCreateIndividualUnits,
    title: 'BoxCreate/BoxCreateIndividualUnits',
} as Meta;

const BoxCreateIndividualUnits_: Story<BoxCreateIndividualUnitsProps> = (args) => <BoxCreateIndividualUnits {...args} />;
export const Primary = BoxCreateIndividualUnits_.bind({});
Primary.args = {
    
} as BoxCreateIndividualUnitsProps;
