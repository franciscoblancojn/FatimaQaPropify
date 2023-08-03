import React from 'react';
import {
    Pagination as FenextPagination,
    PaginationProps as FenextPaginationProps,
} from 'fenextjs-component/cjs/Pagination';

export interface PaginationProps extends FenextPaginationProps {
    styleTemplate?: 'Pagination';
}
export const Pagination = ({
    styleTemplate = 'Pagination',
    ...props
}: PaginationProps) => {
    return (
        <FenextPagination
            {...props}
            className={`${styleTemplate} ${props?.className ?? ''}`}
        />
    );
};
