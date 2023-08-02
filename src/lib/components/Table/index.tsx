import React from 'react';
import {
    Table as FenextTable,
    TableProps as FenextTableProps,
} from 'fenextjs-component/cjs/Table';

export interface TableProps<T> extends FenextTableProps<T> {
    styleTemplate?: 'Table1';
}
export const Table = <T,>({
    styleTemplate = 'Table1',
    ...props
}: TableProps<T>) => {
    return (
        <FenextTable
            {...props}
            classNameContent={`${props.classNameContent} ${styleTemplate}`}
        />
    );
};
