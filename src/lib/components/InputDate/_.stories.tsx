import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputDate, InputDateProps } from './index';

export default {
    component: InputDate,
    title: 'InputDate/InputDate',
} as Meta;

const InputDate_: Story<InputDateProps> = (args) => <InputDate {...args} />;
export const Primary = InputDate_.bind({});
Primary.args = {
    label:"Date",
    placeholder:"Date"
} as InputDateProps;
