import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonMenu, ButtonMenuProps } from './index';

export default {
    component: ButtonMenu,
    title: 'ButtonMenu/ButtonMenu',
} as Meta;

const ButtonMenu_: Story<ButtonMenuProps> = (args) => <ButtonMenu {...args} />;
export const Primary = ButtonMenu_.bind({});
Primary.args = {
    
} as ButtonMenuProps;
