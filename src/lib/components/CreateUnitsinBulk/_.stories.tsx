import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CreateUnitsinBulk, CreateUnitsinBulkProps } from './index';

export default {
    component: CreateUnitsinBulk,
    title: 'CreateUnitsinBulk/CreateUnitsinBulk',
} as Meta;

const CreateUnitsinBulk_: Story<CreateUnitsinBulkProps> = (args) => <CreateUnitsinBulk {...args} />;
export const Primary = CreateUnitsinBulk_.bind({});
Primary.args = {
    styleTemplate:"CreateUnitsinBulk"
} as CreateUnitsinBulkProps;
