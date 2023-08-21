import { InputCheckbox } from '../InputCheckbox';

import { Text } from '../Text';
export interface InputScreeningChecksProps {
    styleTemplate?: 'InputScreeningChecks1';
}
export const InputScreeningChecks = ({
    styleTemplate = 'InputScreeningChecks1',
}: InputScreeningChecksProps) => {
    return (
        <div className={`InputScreeningChecks ${styleTemplate}`}>
            <Text styleTemplate="Title5">Screening Checks</Text>
            <InputCheckbox label={'Credit Report FICO'} />
            <InputCheckbox label={'Criminal Background Check'} />
            <InputCheckbox label={'Cash Flow Report'} />
            <InputCheckbox label={'Eviction Check'} />
        </div>
    );
};
