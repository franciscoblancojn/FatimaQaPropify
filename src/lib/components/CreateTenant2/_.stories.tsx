import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CreateTenant2, CreateTenant2Props } from './index';

export default {
    component: CreateTenant2,
    title: 'CreateTenant2/CreateTenant2',
} as Meta;

const CreateTenant2_: Story<CreateTenant2Props> = (args) => <CreateTenant2 {...args} />;
export const Primary = CreateTenant2_.bind({});
Primary.args = {
    styleTemplate:"CreateTenant2"
} as CreateTenant2Props;
