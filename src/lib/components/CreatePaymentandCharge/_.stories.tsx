
import { Story, Meta } from '@storybook/react';
import { CreatePaymentandCharge, CreatePaymentandChargeProps } from './index';

export default {
    component: CreatePaymentandCharge,
    title: 'CreatePaymentandCharge/CreatePaymentandCharge',
} as Meta;

const CreatePaymentandCharge_: Story<CreatePaymentandChargeProps> = (args) => <CreatePaymentandCharge {...args} />;
export const Primary = CreatePaymentandCharge_.bind({});
Primary.args = {
    
} as CreatePaymentandChargeProps;
