import { User1 } from '../../../../svg/user1';
import { BoxCreate } from '../../index';

export interface BoxCreateIndividualWorkerProps {}

export const BoxCreateIndividualWorker =
    ({}: BoxCreateIndividualWorkerProps) => {
        return (
            <>
                <BoxCreate
                    icon={<User1 />}
                    text="Individual Worker"
                    title="Create"
                />
            </>
        );
    };
