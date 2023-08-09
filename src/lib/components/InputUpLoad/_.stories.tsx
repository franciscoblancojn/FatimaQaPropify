import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputUpload, InputUploadProps } from './index';

export default {
    component: InputUpload,
    title: 'InputUpload/InputUpload',
} as Meta;

const InputUpload_: Story<InputUploadProps> = (args) => <InputUpload {...args} />;
export const Primary = InputUpload_.bind({});
Primary.args = {
    
} as InputUploadProps;
