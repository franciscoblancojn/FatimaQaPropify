import { UserMassive } from '../../../../svg/usermassive';

import { BoxCreate } from '../../index';

export interface BoxCreateMassiveWorkersProps {}

export const BoxCreateMassiveWorkers = ({}: BoxCreateMassiveWorkersProps) => {
    return (
        <>
            <BoxCreate
                icon={<UserMassive />}
                text="Massive Workers"
                title="Create"
            />
        </>
    );
};
