import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MediaInput, MediaInputProps } from './index';

export default {
    component: MediaInput,
    title: 'MediaInput/MediaInput',
} as Meta;

const MediaInput_: Story<MediaInputProps> = (args) => <MediaInput {...args} />;
export const Primary = MediaInput_.bind({});
Primary.args = {
    titleView: "Add Images",
    textView: "Drag Image"
} as MediaInputProps;
