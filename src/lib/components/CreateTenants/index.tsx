import { ApplicationFee } from '../ApplicationFee';
import { Button } from '../Button';
import { CreatePersonalDetails } from '../CreatePersonalDetails';
import { CreateScreeningChecks } from '../CreateScreeningChecks';
import { MessageDetails } from '../MessageDetails';
import { SendVia } from '../SendVia';
import { Text } from '../Text';

export interface CreateTenantsProps {
    styleTemplate?: 'CreateTenants';
}
export const CreateTenants = ({
    styleTemplate = 'CreateTenants',
}: CreateTenantsProps) => {
    return (
        <div className={`CreateTenants ${styleTemplate}`}>
            <Text styleTemplate="Title2">Create Tenant</Text>
            <Text styleTemplate="Text3">
                The Create Tenants feature allows you to easily create new units
                within your organization or business. By creating tenants, you
                can organize your resources, and manage them efficiently.
            </Text>
            <div className='CreatePersonalDetails'>
                <CreatePersonalDetails />
            </div>
            <div className=' CreateScreeningChecks'>
                <CreateScreeningChecks
                />
            </div>

            <div className='MessageDetails'>
                <MessageDetails />
            </div>
            <div className=' ApplicationFee'>
                <ApplicationFee />

            </div>
            <div className='SendVia'>
                <SendVia />
            </div>
            <Button styleTemplate='btn2'>
                Send
            </Button>



        </div>
    );
};
