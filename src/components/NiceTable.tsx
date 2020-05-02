import React, { FC, useState } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import ColumnModel from '../types/ColumnModel';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TablePagination from './TablePagination';

const useStyles = createUseStyles({
  tableRoot: {
    width: (props:any) => props.width
  },
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
  width?:string;
  footerToolbar?: React.ReactNode;
}

function getShowingData(data:any[], pageIndex:number, pageSize:number){
  const result = data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
  return result;
}

function getTotalPages(totalRows: number, pageSize: number) {
  return Math.ceil(totalRows / pageSize);
}

const NiceTable: FC<Props> = ({columns, data, hasPagination, pageSizeOptions, height, width, footerToolbar}) => {
  const classes = useStyles({height, width});
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
    <div className={`NiceTableRoot ${classes.tableRoot}`}>
    <div className={`NiceTableContainer ${classes.tableContainer}`}>
      <table>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={showingData} />
      </table>  
    </div>
    { (hasPagination || footerToolbar) &&
    (
      <TableFooter>
        <div className='NiceTable-FooterToolbar'>
          {footerToolbar}
        </div>
        {hasPagination &&
        <TablePagination 
            onChangePageSize={handleChangePageSize} 
            onChangePageIndex={handleChangePageIndex} 
            pageSizeOptions={pageSizeOptions!} 
            pageIndex={pageIndex} 
            pageSize={pageSize} 
            totalPages={totalPages} />
        }
      </TableFooter>
        )}
  </div>
  );
}

export default NiceTable;