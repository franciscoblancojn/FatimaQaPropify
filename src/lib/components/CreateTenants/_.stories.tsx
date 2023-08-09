import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CreateTenants, CreateTenantsProps } from './index';

export default {
    component: CreateTenants,
    title: 'CreateTenants/CreateTenants',
} as Meta;

const CreateTenants_: Story<CreateTenantsProps> = (args) => <CreateTenants {...args} />;
export const Primary = CreateTenants_.bind({});
Primary.args = {
    styleTemplate:"CreateTenants"
} as CreateTenantsProps;
