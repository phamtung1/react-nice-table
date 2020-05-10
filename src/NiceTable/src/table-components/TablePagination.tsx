import React, { FC } from 'react';
import IconButton from '../core-components/IconButton';

type Props = {
  pageSizeOptions: number[];
  pageSize: number;
  pageIndex: number;
  totalRows: number;
  onChangePageSize?(value:number): void;
  onChangePageIndex?(value:number): void;
}

function getTotalPages(totalRows: number, pageSize: number) {
    return Math.ceil(totalRows / pageSize);
}

const TablePagination:FC<Props> = ({pageIndex, totalRows, pageSizeOptions, pageSize, onChangePageSize, onChangePageIndex}) => {
    const totalPages = getTotalPages(totalRows, pageSize);
    
    const firstPage = () => {
        handleChangePageIndex(0);
    }

    const previousPage = () => {
        if(pageIndex > 0){
            handleChangePageIndex(pageIndex - 1);
        }
    }

    const nextPage = () => {
        if(pageIndex < totalPages - 1){
            handleChangePageIndex(pageIndex + 1);
        }
    }

    const lastPage = () => {
        handleChangePageIndex(totalPages - 1);
    }

    const handleChangePageSize = (event:any) => {
        onChangePageSize && onChangePageSize(parseInt(event.target.value));
    }

    const handleChangePageIndex = (value:number) => {
        onChangePageIndex && onChangePageIndex(value);
    }
    
    const startIndex = pageIndex * pageSize;
    let endIndex = startIndex + pageSize;
    if(endIndex > totalRows){
        endIndex = totalRows;
    }
  return (
    <div className="NiceTable-Pagination">
        <select className="NiceTable-Pagination-Select" onChange={handleChangePageSize} value={pageSize}>
            {pageSizeOptions.map((value:number) => <option key={value} value={value}>{value} rows</option>)}
        </select>
        <div style={{display:'flex'}}>
            <IconButton disabled={pageIndex === 0} icon='first_page' color='#000' onClick={firstPage} /> 
            <IconButton disabled={pageIndex === 0} icon='chevron_left' color='#000' onClick={previousPage} /> 
            <div className='NiceTable-Pagination-CurrentPage'>{startIndex + 1}-{endIndex} of {totalRows}</div>
            <IconButton disabled={pageIndex >= totalPages - 1} icon='chevron_right' color='#000' onClick={nextPage} /> 
            <IconButton disabled={pageIndex >= totalPages - 1} icon='last_page' color='#000' onClick={lastPage} /> 
        </div>
    </div>
  );
}

export default TablePagination;