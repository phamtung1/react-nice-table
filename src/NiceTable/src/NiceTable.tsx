import React, { FC, useState, useEffect } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import ColumnModel from './types/ColumnModel';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TablePagination from './TablePagination';

import LocalDataService from './functions/LocalDataService';

import { FilterDataType } from '../src/types/FilterDataType';

const useStyles = createUseStyles({
  tableRoot: {
    width: (props:any) => props.width
  },
  tableContainer: {
    height: (props:any) => props.height
  }
})

export type Props = {
  columns: ColumnModel[];
  data: any;
  hasPagination?: boolean;
  pageSizeOptions?: number[];
  height?:string;
  width?:string;
  footerToolbar?: React.ReactNode;
  filterComponent?: React.ReactNode;
  filterData?: FilterDataType;
}

function getTotalPages(totalRows: number, pageSize: number) {
  return Math.ceil(totalRows / pageSize);
}

const NiceTable: FC<Props> = ({columns, data, hasPagination, pageSizeOptions, height, width, footerToolbar, filterComponent, filterData}) => {
  const isRemoteData = typeof(data) === 'function';
  const classes = useStyles({height, width});
  if(hasPagination && !pageSizeOptions)
  {
    pageSizeOptions = [10, 25, 50];
  }

  const defaultPageSize = hasPagination ? pageSizeOptions![0] : 0;
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [pageIndex, setPageIndex] = useState(0);

  const [totalPages, setTotalPages] = useState(0);
  const [showingData, setShowingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadRemoteData = (newPageIndex: number, newPageSize: number, filterData:any) => {
    setIsLoading(true);
    const query = { pageIndex: newPageIndex, pageSize: newPageSize, filterData: filterData};
    data(query).then((result:any)=> {
      setTotalPages(getTotalPages(result.totalRows, newPageSize));
      setShowingData(result.data);
      setIsLoading(false);
    });
  }
  
  const loadLocalData = (data:any, pageIndex:number, pageSize:number, filterData:any) => {
    const filterResult = LocalDataService.getShowingData(data, pageIndex, pageSize, filterData);
    
    setTotalPages(getTotalPages(filterResult.totalRows, pageSize));
    setShowingData(filterResult.data);
  }

 useEffect(() =>{
  if(isRemoteData){
    loadRemoteData(pageIndex, pageSize, filterData);
  }
  else
  {
    loadLocalData(data, pageIndex, pageSize, filterData);
  }
 },[isRemoteData, filterData]);

  const handleChangePageSize = (newPageSize:number) => {
    const newPageIndex = 0;
    setPageSize(newPageSize);
    setPageIndex(newPageIndex);
    if(isRemoteData)
    {
      loadRemoteData(newPageIndex, newPageSize, filterData);
    }
    else {
      loadLocalData(data, newPageIndex, newPageSize, filterData);
    }
  }

  const handleChangePageIndex = (newPageIndex:number) => {
    setPageIndex(newPageIndex);
    if(isRemoteData)
    {
      loadRemoteData(newPageIndex, pageSize, filterData);
    }
    else
    {
      // should optimize to cache filter result
      loadLocalData(data, newPageIndex, pageSize, filterData);
    }
  }

  return (
    <div className={`NiceTableRoot ${classes.tableRoot}`}>
      <div className='NiceTable-Filter'>
        {filterComponent}
      </div>
    <div className={`NiceTableContainer ${classes.tableContainer} ${isLoading ? 'loading' : ''}`}>
      <table>
      <TableHead columns={columns} />
      {
        (isRemoteData && !showingData) ? 
        null :
        <TableBody columns={columns} data={showingData} />
      }
      
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