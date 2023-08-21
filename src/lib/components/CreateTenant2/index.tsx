import { Back } from '../Back';
import { Button } from '../Button';
import { MediaInput } from '../InputMedia';
import { InputPersonalDetails } from '../InputPersonalDetails';
import { InputScreeningChecks } from '../InputScreeningChecks';
import { Text } from '../Text';

export interface CreateTenant2Props {
    styleTemplate?: 'CreateTenant2';
}
export const CreateTenant2 = ({
    styleTemplate = 'CreateTenant2',
}: CreateTenant2Props) => {
    return (
        <div className={`CreateTenant2 ${styleTemplate}`}>
            <Back>Cancel</Back>
            <Text styleTemplate="Title2">Create Tenant</Text>
            <Text styleTemplate="Text3">
                The Create Tenants feature allows you to easily create new units
                within your organization or business. By creating tenants, you
                can organize your resources, and manage them efficiently.
            </Text>

            <div className="ContentColumnas">
                <div className="col1">
                    <MediaInput titleView=" Add Images" textView="Drag Image" />
                </div>
                <div className="col2">
                    <InputPersonalDetails />
                </div>
                <div className="col3">
                    <InputScreeningChecks />
                </div>
                <div className="col4">
                    <Button styleTemplate="btn2">Create Tenant</Button>
                </div>
            </div>
        </div>
    );
};
