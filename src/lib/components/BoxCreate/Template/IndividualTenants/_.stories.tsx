import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreateIndividualTenants, BoxCreateIndividualTenantsProps } from './index';

export default {
    component: BoxCreateIndividualTenants,
    title: 'BoxCreate/BoxCreateIndividualTenants',
} as Meta;

const BoxCreateIndividualTenants_: Story<BoxCreateIndividualTenantsProps> = (args) => <BoxCreateIndividualTenants {...args} />;
export const Primary = BoxCreateIndividualTenants_.bind({});
Primary.args = {
    
} as BoxCreateIndividualTenantsProps;
