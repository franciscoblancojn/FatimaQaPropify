import { UserCreation } from '../../../../svg/usercreation';

import { BoxCreate } from '../../index';

export interface BoxCreateSelfCreationProps {}

export const BoxCreateSelfCreation = ({}: BoxCreateSelfCreationProps) => {
    return (
        <>
            <BoxCreate
                icon={<UserCreation />}
                text=" Self Creation"
                title="Create"
            />
        </>
    );
};
