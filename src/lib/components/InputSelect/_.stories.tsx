import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InputSelect, InputSelectProps } from './index';

export default {
    component: InputSelect,
    title: 'InputSelect/InputSelect',
} as Meta;

const InputSelect_: Story<InputSelectProps> = (args) => <InputSelect {...args} />;
export const Primary = InputSelect_.bind({});
Primary.args = {
    options:[
        {
            id:"Please select what to do if",
            text:"Tenant open message and pay",
            
        },
        {
            id:"Please select what to do if",
            text:"Tenant open message and doesn't pay",
            
        },
        {
            id:"Please select what to do if",
            text:"Tenant doesn't open message",
            
            
        },
        {
            id:"Please select what to do if",
            text:"Tenant open message and pay",
            
            
        }
    ]
    
} as InputSelectProps;
