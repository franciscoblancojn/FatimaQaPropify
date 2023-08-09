import { MassiveUnits } from '../../../../svg/massiveunits';
import { BoxCreate } from '../../index';

export interface BoxCreateMassiveUnitsProps {}

export const BoxCreateMassiveUnits = ({}: BoxCreateMassiveUnitsProps) => {
    return (
        <>
            <BoxCreate
                icon={<MassiveUnits />}
                text=" Massive Units"
                title="Create"
            />
        </>
    );
};
