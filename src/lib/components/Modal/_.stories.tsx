import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Modal, ModalProps } from './index';

export default {
    component: Modal,
    title: 'Modal/Modal',
} as Meta;

const Modal_: Story<ModalProps> = (args) => <Modal {...args} />;
export const Primary = Modal_.bind({});
Primary.args = {

} as ModalProps;
