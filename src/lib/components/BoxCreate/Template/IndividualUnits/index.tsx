import { IndividualUnits } from '../../../../svg/individualunits';

import { BoxCreate } from '../../index';

export interface BoxCreateIndividualUnitsProps {}

export const BoxCreateIndividualUnits = ({}: BoxCreateIndividualUnitsProps) => {
    return (
        <>
            <BoxCreate
                icon={<IndividualUnits />}
                text="Individual Units"
                title="Create"
            />
        </>
    );
};
