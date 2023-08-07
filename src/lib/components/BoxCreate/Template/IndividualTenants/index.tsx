import { User1 } from '../../../../svg/user1';
import { BoxCreate } from '../../index';

export interface BoxCreateIndividualTenantsProps {}

export const BoxCreateIndividualTenants =
    ({}: BoxCreateIndividualTenantsProps) => {
        return (
            <>
                <BoxCreate
                    icon={<User1 />}
                    text="Individual Tenants"
                    title="Create"
                />
            </>
        );
    };
