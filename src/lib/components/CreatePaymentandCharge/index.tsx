import { Back } from '../Back';
import { Container } from '../Container';

import { InputCheckbox } from '../InputCheckbox';
import { InputSelect } from '../InputSelect';
import { Link } from '../Link';
import { Text } from '../Text';

export interface CreatePaymentandChargeProps {
    styleTemplate?: 'CreatePaymentandCharge';
}
export const CreatePaymentandCharge = ({
    styleTemplate = 'CreatePaymentandCharge',
}: CreatePaymentandChargeProps) => {
    return (
        <div className={`CreatePaymentandCharge ${styleTemplate}`}>
            <Back>Cancel</Back>
            <Text styleTemplate="Title2">Create Paymentand Charge</Text>
            <Text styleTemplate="Text3">
                The Create Tenants feature allows you to easily create new units
                within your organization or business. By creating tenants, you
                can organize your resources, and manage them efficiently.
            </Text>
            <Container
                customSize={477}
                usePaddingInline={false}
                className="container"
            >
                <div className="ContentInformation">
                    <Text styleTemplate="Title5">Payment Details</Text>

                    <InputSelect
                        placeholder="Condo 2 - fort myers"
                        options={[
                            {
                                id: 'opcion1',

                                text: 'Condo 2 - fort myers',
                            },
                        ]}
                    />

                    <div className="TextDescripcion">
                        <div className="Adress">
                            <Text styleTemplate="Text3" className="textd">
                                {' '}
                                Adress:
                            </Text>
                            <Link href={'/adrees'} target={undefined}>
                                1743 Boxwood Lane 34105 Naples, FL
                            </Link>
                        </div>
                        <div className="Adress">
                            <Text styleTemplate="Text3" className="textd">
                                Tenant assign:
                            </Text>
                            <Link href={'/tenantAssing'} target={undefined}>
                                Mike L Peterson
                            </Link>
                        </div>
                        <div className="Adress">
                            <Text styleTemplate="Text3" className="textd">
                                Rent Fee:
                            </Text>
                            <Text styleTemplate="Text3"> $1,000</Text>
                        </div>
                    </div>

                    <InputCheckbox label={'Charge'} />
                    <InputCheckbox label={'Make Payment'} />

                    <InputSelect
                        placeholder="Send SMS with checkout URL"
                        options={[
                            {
                                id: 'opcion1',

                                text: 'Send SMS with checkout URL',
                            },
                        ]}
                    />
                </div>
            </Container>
        </div>
    );
};
