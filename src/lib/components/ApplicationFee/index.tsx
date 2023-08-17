import { InputCheckbox } from '../InputCheckbox';

import { Text } from '../Text';
export interface ApplicationFeeProps {
    styleTemplate?: 'ApplicationFee1';
}
export const ApplicationFee = ({
    styleTemplate = 'ApplicationFee1',
}: ApplicationFeeProps) => {
    return (
        <div className={`ApplicationFee ${styleTemplate}`}>
            <Text styleTemplate="Title5">Screening Checks</Text>
            <div className="inputCheckbox">
                <InputCheckbox label={'By Prospect'} />
                <InputCheckbox label={'Credit Report FICO'} />
            </div>
        </div>
    );
};
