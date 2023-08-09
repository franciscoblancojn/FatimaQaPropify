import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreateMassiveUnits, BoxCreateMassiveUnitsProps } from './index';

export default {
    component: BoxCreateMassiveUnits,
    title: 'BoxCreate/BoxCreateMassiveUnits',
} as Meta;

const BoxCreateMassiveUnits_: Story<BoxCreateMassiveUnitsProps> = (args) => <BoxCreateMassiveUnits {...args} />;
export const Primary = BoxCreateMassiveUnits_.bind({});
Primary.args = {
    
} as BoxCreateMassiveUnitsProps;
