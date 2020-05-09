import React, { FC, useState, useEffect } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import { ColumnModel, DataResultModel, FilterDataModel, RemoteDataFn } from './types/DataModel';
import TableHead from './table-components/TableHead';
import TableBody from './table-components/TableBody';
import TableFooter from './table-components/TableFooter';
import TablePagination from './table-components/TablePagination';

import DataService from './functions/DataService';
import {CheckedState} from './types/Enum';

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
  onSelectionChange?(selectedRowDataIds:any[]):void;
  defaultSelectedIds?:any[];
}

const NiceTable: FC<NiceTableProps> = ({
  columns, data, hasPagination, pageSizeOptions, height, width, 
  footerToolbar, filterComponent, filterData, 
  sortable, defaultSortBy, defaultSortOrder,
  selection, onSelectionChange, defaultSelectedIds}) => {
  
  const isRemoteData = typeof(data) === 'function';

  const classes = useStyles({height, width});
  if(hasPagination && !pageSizeOptions)
  {
    pageSizeOptions = [10, 25, 50];
  }

  const defaultPageSize = hasPagination ? pageSizeOptions![0] : 0;
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  const [showingData, setShowingData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  
  const [selectedRowDataIds, setSelectedRowDataIds] = useState<any[]>(defaultSelectedIds || []);
  const [headerCheckedState, setHeaderCheckedState] = useState<CheckedState>(CheckedState.Unchecked);

  const loadData = (data:any[] | RemoteDataFn, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) => {
    setIsLoading(true);
    
    DataService.loadData(data, pageIndex, pageSize, filterData, sortBy, sortOrder)
      .then(function(result:DataResultModel){
        setTotalRows(result.totalRows);
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

  const handleSelectionChange = (rowDataId:any, newState: CheckedState) => {
    if(newState === CheckedState.Checked) {
      const index = selectedRowDataIds.indexOf(rowDataId);
      if (index == -1) {
        selectedRowDataIds.push(rowDataId);
      }
       
    }
    else if(newState === CheckedState.Unchecked){
      const index = selectedRowDataIds.indexOf(rowDataId);
      if (index > -1) {
        selectedRowDataIds.splice(index, 1);
      }
    }

    const newArray = [...selectedRowDataIds];

    const newHeaderCheckedState = newArray.length === 0 ? CheckedState.Unchecked : 
        (newArray.length === totalRows ? CheckedState.Checked : CheckedState.Indeterminate);
    
    setHeaderCheckedState(newHeaderCheckedState);
    setSelectedRowDataIds(newArray);

    onSelectionChange && onSelectionChange(newArray);
  }

  const handleHeaderSelectionChange = (newState:CheckedState) => {
    let newIds = [];
    if(newState === CheckedState.Checked) {
       newIds = typeof(data) === 'function' ? [] : data.map((item:any) => item['id']);
    }

    setSelectedRowDataIds(newIds);
    setHeaderCheckedState(newState);

    onSelectionChange && onSelectionChange(newIds);
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
          hideSelectionBox={isRemoteData}
          checkedState={headerCheckedState}
          onSelectionChange={handleHeaderSelectionChange}
           />
      <TableBody columns={columns} data={showingData} selection={selection} onSelectionChange={handleSelectionChange} selectedRowDataIds={selectedRowDataIds}/>
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
            totalRows={totalRows} />
        }
      </TableFooter>
        )}
  </div>
  );
}

export default NiceTable;