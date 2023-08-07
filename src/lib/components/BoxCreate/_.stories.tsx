import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BoxCreate, BoxCreateProps } from './index';
import { User1 } from '../../svg/user1';

export default {
    component: BoxCreate,
    title: 'BoxCreate/BoxCreate',
} as Meta;

const BoxCreate_: Story<BoxCreateProps> = (args) => <BoxCreate {...args} />;
export const Primary = BoxCreate_.bind({});
Primary.args = {
    icon: <User1 />,
    text: "Individual Tenants",
    title: "Create",
} as BoxCreateProps;
