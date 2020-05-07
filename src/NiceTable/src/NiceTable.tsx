import React, { FC, useState, useEffect } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import ColumnModel from './types/ColumnModel';
import TableHead from './table-components/TableHead';
import TableBody from './table-components/TableBody';
import TableFooter from './table-components/TableFooter';
import TablePagination from './table-components/TablePagination';

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
  sortable?:boolean;
  defaultSortBy?:string;
  defaultSortOrder?:string;
}

function getTotalPages(totalRows: number, pageSize: number) {
  return Math.ceil(totalRows / pageSize);
}

const NiceTable: FC<Props> = ({
  columns, data, hasPagination, pageSizeOptions, height, width, 
  footerToolbar, filterComponent, filterData, 
  sortable, defaultSortBy, defaultSortOrder}) => {
  
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
  const [showingData, setShowingData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);


  const loadRemoteData = (newPageIndex: number, newPageSize: number, filterData:any, sortBy?:string, sortOrder?:string) => {
    setIsLoading(true);
    const query = { pageIndex: newPageIndex, pageSize: newPageSize, filterData: filterData, sortBy: sortBy, sortOrder: sortOrder};
    data(query).then((result:any)=> {
      setTotalPages(getTotalPages(result.totalRows, newPageSize));
      setShowingData(result.data);
      setIsLoading(false);
    });
  }
  
  const loadLocalData = (data:any, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) => {
    setIsLoading(true);
      setTimeout(() => {
      const result = LocalDataService.getShowingData(data, pageIndex, pageSize, filterData, sortBy, sortOrder);
      
      setTotalPages(getTotalPages(result.totalRows, pageSize));
      setShowingData(result.data);
      setIsLoading(false);
    },50)
  }

  const loadData = (data:any, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) => {
    if(isRemoteData){
      loadRemoteData(pageIndex, pageSize, filterData, sortBy, sortOrder);
    }
    else
    {
      loadLocalData(data, pageIndex, pageSize, filterData, sortBy, sortOrder);
    }
  }

 useEffect(() =>{
   loadData(data, pageIndex, pageSize, filterData, sortBy, sortOrder);
 },[isRemoteData, filterData, data]);

  const handleChangePageSize = (newPageSize:number) => {
    const newPageIndex = 0;
    setPageSize(newPageSize);
    setPageIndex(newPageIndex);
    loadData(data, newPageIndex, newPageSize, filterData, sortBy, sortOrder);
  }

  const handleChangePageIndex = (newPageIndex:number) => {
    setPageIndex(newPageIndex);
    // should optimize to cache filter result
    loadData(data, newPageIndex, pageSize, filterData, sortBy, sortOrder);
  }

  const handleOnSort = (newSortBy:string, newSortOrder:string) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    loadData(data, pageIndex, pageSize, filterData, newSortBy, newSortOrder);
  }

  return (
    <div className={`NiceTableRoot ${classes.tableRoot}`}>
      <div className='NiceTable-Filter'>
        {filterComponent}
      </div>
    <div className={`NiceTableContainer ${classes.tableContainer} ${isLoading ? 'loading' : ''}`}>
      <table>
      <TableHead 
          columns={columns} 
          sortable={sortable} 
          defaultSortBy={sortBy} 
          defaultSortOrder={sortOrder}
          onSort={handleOnSort}
           />
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