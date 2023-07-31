import React, { ReactNode } from 'react';
import { Text } from '../../components/Text';
import { Button } from '../Button';

export interface InfoEmptyProps {
    className?: string;
    styleTemplate?: 'InfoEmpty';
    textButton?: string;
    text?: string;
    icon?: ReactNode;
}
export const InfoEmpty = ({
    styleTemplate = 'InfoEmpty',
    className = '',
    icon = '',
    text = '',
    textButton = '',
}: InfoEmptyProps) => {
    return (
        <div className={`${styleTemplate} ${className ?? ''}`}>
            {icon}
            <Text>{text}</Text>
            <Button>{textButton}</Button>
        </div>
    );
};
