import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputScreeningChecks, InputScreeningChecksProps } from './index';

export default {
    component: InputScreeningChecks,
    title: 'InputScreeningChecks/InputScreeningChecks',
} as Meta;

const InputScreeningChecks_: Story<InputScreeningChecksProps> = (args) => <InputScreeningChecks {...args} />;
export const Primary = InputScreeningChecks_.bind({});
Primary.args = {

    styleTemplate:"InputScreeningChecks1"
} as InputScreeningChecksProps;
