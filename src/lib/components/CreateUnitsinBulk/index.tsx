import { Back } from '../Back';
import { Button } from '../Button';
import { InputUpload } from '../InputUpLoad';
import { Text } from '../Text';

export interface CreateUnitsinBulkProps {
    styleTemplate?: 'CreateUnitsinBulk';
}
export const CreateUnitsinBulk = ({
    styleTemplate = 'CreateUnitsinBulk',
}: CreateUnitsinBulkProps) => {
    return (
        <div className={`CreateUnitsinBulk ${styleTemplate}`}>
            <Back>Cancel</Back>
            <div className="ContentColumnas">
                <div className="col1">
                    <Text styleTemplate="Title2">Create Unit sin Bulk</Text>
                    <Text styleTemplate="Text3">
                        The Create Units feature allows you to easily create new
                        units within your organization or business. By creating
                        tenants, you can organize your resources, and manage
                        them efficiently.
                    </Text>
                </div>
                <div className="col2">
                    <Button styleTemplate="btn3">Download File Template</Button>
                    <Text styleTemplate="Text3">
                        This is the recommended template to map the fields of
                        the by product.
                    </Text>
                </div>
            </div>
            <InputUpload />
        </div>
    );
};
