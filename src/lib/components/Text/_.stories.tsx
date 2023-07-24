import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './index';

export default {
    component: Text,
    title: 'Text/Text',
} as Meta;

const Text_: Story<TextProps> = (args) => <Text {...args} />;
export const Primary = Text_.bind({});
Primary.args = {
    children: 'Hola',
    className: '',
    tag: 'p',

    styleTemplate: 'Text1',
} as TextProps;
