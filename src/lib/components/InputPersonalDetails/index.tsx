import { Input } from '../Input';
import { InputDate } from '../InputDate';
import { InputPassword } from '../InputPassword';
import { InputSelect } from '../InputSelect';
import { Text } from '../Text';

export interface InputPersonalDetailsProps {
    styleTemplate?: 'InputPersonalDetails1';
}
export const InputPersonalDetails = ({
    styleTemplate = 'InputPersonalDetails1',
}: InputPersonalDetailsProps) => {
    return (
        <div className={`InputPersonalDetails ${styleTemplate}`}>
            <Text styleTemplate="Title5">Personal Details</Text>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <InputDate placeholder="Date of Birth" />
            <Input placeholder="SSN" />
            <InputSelect
                placeholder="Gender"
                options={[
                    {
                        id: 'opcion1',

                        text: 'gender',
                    },
                ]}
            />
            <InputSelect
                placeholder="Select Marital Status"
                options={[
                    {
                        id: 'opcion1',

                        text: 'Select Marital Status',
                    },
                ]}
            />
            <InputPassword placeholder="Phone number" />
            <InputSelect
                placeholder=" Please Assign a Unit"
                options={[
                    {
                        id: 'opcion1',

                        text: 'Please Assign a Unit',
                    },
                ]}
            />
        </div>
    );
};
