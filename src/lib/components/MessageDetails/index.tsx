import { InputSelect } from '../InputSelect';
import { Text } from '../Text';

export interface MessageDetailsProps {
    styleTemplate?: 'MessageDetails1';
}

export const MessageDetails = ({
    styleTemplate = 'MessageDetails1',
}: MessageDetailsProps) => {
    return (
        <div className={`MessageDetails ${styleTemplate}`}>
            <Text styleTemplate="Title5">Message Details</Text>
            <InputSelect
                placeholder="Please select message template"
                options={[
                    {
                        id: 'opcion1',

                        text: 'Name',
                    },
                    {
                        id: 'opcion2',

                        text: 'Email',
                    },
                    {
                        id: 'opcion3',

                        text: 'Phone Email',
                    },
                ]}
            />
        </div>
    );
};
