import { InputCheckbox } from '../InputCheckbox';

import { Text } from '../Text';
export interface SendViaProps {
    styleTemplate?: 'SendVia1';
}
export const SendVia = ({ styleTemplate = 'SendVia1' }: SendViaProps) => {
    return (
        <div className={`SendVia ${styleTemplate}`}>
            <Text styleTemplate="Title5">Send Via </Text>
            <div className="inputCheckbox">
                <InputCheckbox label={'Email'} />
                <InputCheckbox label={'SMS'} />
            </div>
        </div>
    );
};
