import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputCheckbox, InputCheckboxProps } from './index';

export default {
    component: InputCheckbox,
    title: 'InputCheckbox/InputCheckbox',
} as Meta;

const InputCheckbox_: Story<InputCheckboxProps> = (args) => <InputCheckbox {...args} />;
export const Primary = InputCheckbox_.bind({});
Primary.args = {
    label:"Elegir una opcion",
    
      
} as InputCheckboxProps;
