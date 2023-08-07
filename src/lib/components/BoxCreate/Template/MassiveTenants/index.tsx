import { UserMassive } from '../../../../svg/usermassive';

import { BoxCreate } from '../../index';

export interface BoxCreateMassiveTenantsProps {}

export const BoxCreateMassiveTenants = ({}: BoxCreateMassiveTenantsProps) => {
    return (
        <>
            <BoxCreate
                icon={<UserMassive />}
                text="Massive Tenants"
                title="Create"
            />
        </>
    );
};
