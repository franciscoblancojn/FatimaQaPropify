import { InputCheckbox } from '../InputCheckbox';

import { Text } from '../Text';
export interface CreateScreeningChecksProps {
    styleTemplate?: 'CreateScreeningChecks1';
}
export const CreateScreeningChecks = ({
    styleTemplate = 'CreateScreeningChecks1',
}: CreateScreeningChecksProps) => {
    return (
        <div className={`CreateScreeningChecks ${styleTemplate}`}>
            <Text styleTemplate="Title5">Screening Checks</Text>
            <InputCheckbox label={'All'} />
            <InputCheckbox label={'Credit Report FICO'} />
            <InputCheckbox label={'Criminal Background Check'} />
            <InputCheckbox label={'Cash Flow Report'} />
            <InputCheckbox label={'Eviction Check'} />
        </div>
    );
};
