import {
    Container as FenextContainer,
    ContainerProps as FenextContainerProps,
} from 'fenextjs-component/cjs/Container';

export interface ContainerProps extends FenextContainerProps {
    styleTemplate?: 'Container1';
}
export const Container = ({
    styleTemplate = 'Container1',
    ...props
}: ContainerProps) => {
    return (
        <FenextContainer
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
