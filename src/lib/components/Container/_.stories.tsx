
import { Story, Meta } from '@storybook/react';
import { Container, ContainerProps } from './index';

export default {
    component: Container,
    title: 'Container/Container',
} as Meta;

const Container_: Story<ContainerProps> = (args) => <Container {...args} />;
export const Primary = Container_.bind({});
Primary.args = {

} as ContainerProps;
