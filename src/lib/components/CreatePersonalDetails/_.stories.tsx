import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CreatePersonalDetails, CreatePersonalDetailsProps } from './index';

export default {
    component: CreatePersonalDetails,
    title: 'CreatePersonalDetails/CreatePersonalDetails',
} as Meta;

const CreatePersonalDetails_: Story<CreatePersonalDetailsProps> = (args) => <CreatePersonalDetails {...args} />;
export const Primary = CreatePersonalDetails_.bind({});
Primary.args = {

    styleTemplate:"CreatePersonalDetails1"
} as CreatePersonalDetailsProps;
