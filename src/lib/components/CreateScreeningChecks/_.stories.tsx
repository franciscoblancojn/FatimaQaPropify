import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CreateScreeningChecks, CreateScreeningChecksProps } from './index';

export default {
    component: CreateScreeningChecks,
    title: 'CreateScreeningChecks/CreateScreeningChecks',
} as Meta;

const CreateScreeningChecks_: Story<CreateScreeningChecksProps> = (args) => <CreateScreeningChecks {...args} />;
export const Primary = CreateScreeningChecks_.bind({});
Primary.args = {

    styleTemplate:"CreateScreeningChecks1"
} as CreateScreeningChecksProps;
