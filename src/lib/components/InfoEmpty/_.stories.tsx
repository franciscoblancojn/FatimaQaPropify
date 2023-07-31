import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InfoEmpty, InfoEmptyProps } from './index';
import { Card } from '../../svg/card';

export default {
    component: InfoEmpty,
    title: 'InfoEmpty/InfoEmpty',
} as Meta;

const InfoEmpty_: Story<InfoEmptyProps> = (args) => <InfoEmpty {...args} />;
export const Primary = InfoEmpty_.bind({});
Primary.args = {
    icon: <>
        <Card />
    </>,
    text: "Currently, there re no payments to display. Please use the Create Payment button to get started.",
    textButton: "Create First Payment"


} as InfoEmptyProps;
