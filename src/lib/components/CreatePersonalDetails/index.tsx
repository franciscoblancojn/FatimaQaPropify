import { InputCheckbox } from '../InputCheckbox';

import { Text } from '../Text';
export interface CreatePersonalDetailsProps {
    styleTemplate?: 'CreatePersonalDetails1';
}
export const CreatePersonalDetails = ({
    styleTemplate = 'CreatePersonalDetails1',
}: CreatePersonalDetailsProps) => {
    return (
        <div className={`CreatePersonalDetails ${styleTemplate}`}>
            <Text styleTemplate="Title5">Personal Details</Text>
            <InputCheckbox label={'All'} />
            <InputCheckbox label={'First Name'} />
            <InputCheckbox label={'Last Name'} />
            <InputCheckbox label={'Cash Flow Report'} />
            <InputCheckbox label={'Date of Birth'} />
            <InputCheckbox label={'SSN'} />
            <InputCheckbox label={'Gender'} />
            <InputCheckbox label={'Marital Status'} />
            <InputCheckbox label={'Phone Number'} />
        </div>
    );
};
