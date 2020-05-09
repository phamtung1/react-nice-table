import React, { FC, useState, useEffect } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import { ColumnModel, DataResultModel, FilterDataModel, RemoteDataFn } from './types/DataModel';
import TableHead from './table-components/TableHead';
import TableBody from './table-components/TableBody';
import TableFooter from './table-components/TableFooter';
import TablePagination from './table-components/TablePagination';

import DataService from './functions/DataService';

const useStyles = createUseStyles({
  tableRoot: {
    width: (props:any) => props.width
  },
  tableContainer: {
    height: (props:any) => props.height
  }
})

export type NiceTableProps = {
  columns: ColumnModel[];
  data: any[] | RemoteDataFn;
  hasPagination?: boolean;
  pageSizeOptions?: number[];
  height?:string;
  width?:string;
  footerToolbar?: React.ReactNode;
  filterComponent?: React.ReactNode;
  filterData?: FilterDataModel;
  sortable?:boolean;
  defaultSortBy?:string;
  defaultSortOrder?:string;
  selection?:boolean;
}

function getTotalPages(totalRows: number, pageSize: number) {
  return Math.ceil(totalRows / pageSize);
}

const NiceTable: FC<NiceTableProps> = ({
  columns, data, hasPagination, pageSizeOptions, height, width, 
  footerToolbar, filterComponent, filterData, 
  sortable, defaultSortBy, defaultSortOrder,
  selection}) => {
  
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

  const loadData = (data:any[] | RemoteDataFn, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) => {
    setIsLoading(true);
    
    DataService.loadData(data, pageIndex, pageSize, filterData, sortBy, sortOrder)
      .then(function(result:DataResultModel){
        setTotalPages(getTotalPages(result.totalRows, pageSize));
        setShowingData(result.data);
        setIsLoading(false);
      });
  }

 useEffect(() =>{
   loadData(data, pageIndex, pageSize, filterData, sortBy, sortOrder);
 },[filterData, data]);

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
          selection={selection}
           />
      <TableBody columns={columns} data={showingData} selection={selection}/>
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