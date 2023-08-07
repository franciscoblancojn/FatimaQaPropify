import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './index';

export default {
    component: Box,
    title: 'Box/Box',
} as Meta;

const Box_: Story<BoxProps> = (args) => <Box {...args} />;
export const Primary = Box_.bind({});
Primary.args = {
    
} as BoxProps;
