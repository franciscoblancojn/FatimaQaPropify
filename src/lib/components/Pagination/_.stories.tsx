import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Pagination, PaginationProps } from './index';

export default {
    component: Pagination,
    title: 'Pagination/Pagination',
} as Meta;

const Pagination_: Story<PaginationProps> = (args) => <Pagination {...args} />;
export const Primary = Pagination_.bind({});
Primary.args = {
  
    
} as PaginationProps;
