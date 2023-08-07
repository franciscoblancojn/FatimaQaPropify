import React, { ReactNode } from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Link } from '../Link';

export interface BoxCreateProps {
    styleTemplate?: 'BoxCreate1';
    icon?: ReactNode;
    title: string;
    text: string;
}
export const BoxCreate = ({
    styleTemplate = 'BoxCreate1',
    icon,
    title,
    text,
}: BoxCreateProps) => {
    return (
        <>
            <Box>
                <div className={`BoxCreate1 ${styleTemplate}`}>
                    {icon}

                    <Text styleTemplate="Text1">{text}</Text>
                    <Link href={'/Create'}>
                        <Text styleTemplate="Title5">{title}</Text>
                    </Link>
                </div>
            </Box>
        </>
    );
};
