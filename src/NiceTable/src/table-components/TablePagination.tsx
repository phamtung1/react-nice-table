import React, { FC } from 'react';

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

    const handleChangePageSize = (value:number) => {
        onChangePageSize && onChangePageSize(value);
    }

    const handleChangePageIndex = (value:number) => {
        onChangePageIndex && onChangePageIndex(value);
    }
    
  return (
    <div className="NiceTable-Pagination">
        <div  className="NiceTable-Pagination-Text">Rows per page:</div>
        <select className="NiceTable-Pagination-Select" onChange={(event:any) => handleChangePageSize(parseInt(event.target.value))} value={pageSize}>
            {pageSizeOptions.map((value:number) => <option key={value}>{value}</option>)}
        </select>
        <div style={{display:'flex'}}>
            <div role="button" className={pageIndex === 0 ? 'disabled' : ''} onClick={() => previousPage()}>❮</div>
            <div className='NiceTable-Pagination-CurrentPage'>Page {pageIndex + 1} / {totalPages}</div>
            <div role="button" className={pageIndex >= totalPages - 1 ? 'disabled' : ''} onClick={() => nextPage()}>❯</div>
        </div>
    </div>
  );
}

export default TablePagination;