import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputSwich, InputSwichProps } from './index';

export default {
    component: InputSwich,
    title: 'InputSwicht/InputSwicht',
} as Meta;

const InputSwicht_: Story<InputSwichProps> = (args) => <InputSwich {...args} />;
export const Primary = InputSwicht_.bind({});
Primary.args = {
    classNameActive:"",
     classNameInactive:""
    
} as InputSwichProps;
