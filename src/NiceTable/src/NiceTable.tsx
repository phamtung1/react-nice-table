import React, { FC, useState, useEffect } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import { ColumnModel, DataResultModel } from './types/DataModel';
import TableHead from './table-components/TableHead';
import TableBody from './table-components/TableBody';
import TableFooter from './table-components/TableFooter';
import TablePagination from './table-components/TablePagination';

import DataService from './functions/DataService';

import { FilterDataType } from './types/FilterDataType';

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

  const loadData = (data:any, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) => {
    setIsLoading(true);
    const promise = isRemoteData ?
                      DataService.loadRemoteData(data, pageIndex, pageSize, filterData, sortBy, sortOrder) :
                      DataService.loadLocalData(data, pageIndex, pageSize, filterData, sortBy, sortOrder);

    promise.then(function(result:DataResultModel){
      setTotalPages(getTotalPages(result.totalRows, pageSize));
      setShowingData(result.data);
      setIsLoading(false);
    });
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