import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ApplicationFee, ApplicationFeeProps } from './index';

export default {
    component: ApplicationFee,
    title: 'ApplicationFee/ApplicationFee',
} as Meta;

const ApplicationFee_: Story<ApplicationFeeProps> = (args) => <ApplicationFee {...args} />;
export const Primary = ApplicationFee_.bind({});
Primary.args = {

    styleTemplate:"ApplicationFee1"
} as ApplicationFeeProps;
