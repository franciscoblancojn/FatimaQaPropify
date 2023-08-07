
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Link, LinkProps } from './index';

export default {
    component: Link,
    title: 'Link/Link',
} as Meta;

const Link_: Story<LinkProps> = (args) => <Link {...args} />;
export const Primary = Link_.bind({});
Primary.args = {
    
} as LinkProps;
