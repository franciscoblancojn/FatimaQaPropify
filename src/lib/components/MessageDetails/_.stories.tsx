import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MessageDetails, MessageDetailsProps } from './index';

export default {
    component: MessageDetails,
    title: 'MessageDetails/MessageDetails',
} as Meta;

const MessageDetails_: Story<MessageDetailsProps> = (args) => <MessageDetails {...args} />;
export const Primary = MessageDetails_.bind({});
Primary.args = {
    
} as MessageDetailsProps;
