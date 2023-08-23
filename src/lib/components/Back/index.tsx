import {
    Back as FenextBack,
    BackProps as FenextBackProps,
} from 'fenextjs-component/cjs/Back';

export interface BackProps extends FenextBackProps {
    styleTemplate?: 'Back1';
}
export const Back = ({ styleTemplate = 'Back1', ...props }: BackProps) => {
    return (
        <FenextBack
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
