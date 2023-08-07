import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreateMassiveTenants, BoxCreateMassiveTenantsProps } from './index';

export default {
    component: BoxCreateMassiveTenants,
    title: 'BoxCreate/BoxCreateMassiveTenants',
} as Meta;

const BoxCreateMassiveTenants_: Story<BoxCreateMassiveTenantsProps> = (args) => <BoxCreateMassiveTenants {...args} />;
export const Primary = BoxCreateMassiveTenants_.bind({});
Primary.args = {
    
} as BoxCreateMassiveTenantsProps;
