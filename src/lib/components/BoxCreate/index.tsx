import React, { ReactNode } from 'react';
import { Box } from '../Box';
import { Text } from '../Text';

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

                    <Text>{text}</Text>

                    <Text>{title}</Text>
                </div>
            </Box>
        </>
    );
};
