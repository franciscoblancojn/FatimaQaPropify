import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SendVia, SendViaProps } from './index';

export default {
    component: SendVia,
    title: 'SendVia/SendVia',
} as Meta;

const SendVia_: Story<SendViaProps> = (args) => <SendVia {...args} />;
export const Primary = SendVia_.bind({});
Primary.args = {

    styleTemplate:"SendVia1"
} as SendViaProps;
