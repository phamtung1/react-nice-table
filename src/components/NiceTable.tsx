import React, { FC, useState } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import ColumnModel from '../types/ColumnModel';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TablePagination from './TablePagination';

const useStyles = createUseStyles({
  tableContainer: {
    height: (props:any) => props.height
  }
})

type Props = {
  columns: ColumnModel[];
  data: any[];
  hasPagination?: boolean;
  pageSizeOptions?: number[];
  height?:string;
}

function getShowingData(data:any[], pageIndex:number, pageSize:number){
  const result = data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
  console.log(pageIndex, pageSize, result.length);
  return result;
}

function getTotalPages(totalRows: number, pageSize: number) {
  return Math.ceil(totalRows / pageSize);
}

const NiceTable: FC<Props> = ({columns, data, hasPagination, pageSizeOptions, height}) => {
  const classes = useStyles({height});
  if(hasPagination && !pageSizeOptions)
  {
    pageSizeOptions = [10, 25, 50];
  }

  const defaultPageSize = hasPagination ? pageSizeOptions![0] : data.length;
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(getTotalPages(data.length, pageSize));
  const [showingData, setShowingData] = useState(getShowingData(data, 0, pageSize));

  const handleChangePageSize = (newPageSize:number) =>{
    setPageSize(newPageSize);
    setPageIndex(0);
    setTotalPages(getTotalPages(data.length, newPageSize));
    setShowingData(getShowingData(data, 0, newPageSize));
  }

  const handleChangePageIndex = (value:number) =>{
    setPageIndex(value);
    setShowingData(getShowingData(data, value, pageSize));
  }

  return (
    <div className="NiceTableRoot">
    <div className={`NiceTableContainer ${classes.tableContainer}`}>
      <table>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={showingData} />
      </table>  
    </div>
    { hasPagination &&
    <TablePagination onChangePageSize={handleChangePageSize} onChangePageIndex={handleChangePageIndex} pageSizeOptions={pageSizeOptions!} pageIndex={pageIndex} pageSize={pageSize} totalPages={totalPages} />}
  </div>
  );
}

export default NiceTable;