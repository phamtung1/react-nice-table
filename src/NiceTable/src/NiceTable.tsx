import React, { FC, useState, useEffect } from 'react';
import './style.scss';

import {createUseStyles} from 'react-jss';

import { ColumnModel, DataResultModel, FilterDataModel, RemoteDataFn, ExportButtonModel } from './types/DataModel';
import TableHead from './table-components/TableHead';
import TableBody from './table-components/TableBody';
import TableFooter from './table-components/TableFooter';
import TablePagination from './table-components/TablePagination';

import DataService from './functions/DataService';
import {CheckedState} from './types/Enum';
import AppConsts from './types/AppConsts';
import TableFooterToolbar from './table-components/TableFooterToolbar';

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
  filterComponent?: React.ReactNode;
  filterData?: FilterDataModel;
  sortable?:boolean;
  defaultSortBy?:string;
  defaultSortOrder?:string;
  selectable?:boolean;
  onSelectionChange?(selectedRowDataIds:any[]):void;
  defaultSelectedIds?:any[];
  fullRowSelectable?:boolean;
  dataIdField?:string;
  exportButtons?:ExportButtonModel[];
}

const NiceTable: FC<NiceTableProps> = ({
  columns, data, hasPagination, pageSizeOptions, height, width, 
  filterComponent, filterData, 
  sortable, defaultSortBy, defaultSortOrder,
  selectable, onSelectionChange, defaultSelectedIds, fullRowSelectable, dataIdField = AppConsts.DefaultDataIdField,
  exportButtons}) => {

  const isRemoteData = typeof(data) === 'function';
  
  const divContainerRef = React.useRef<any>(null); // show loading

  const classes = useStyles({height, width});
  if(hasPagination && !pageSizeOptions)
  {
    pageSizeOptions = [10, 25, 50];
  }

  const defaultPageSize = hasPagination ? pageSizeOptions![0] : 0;
  const [pageSize, setPageSize] = useState<number>(defaultPageSize);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const [showingData, setShowingData] = useState<any[]>([]);
  
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  
  const [selectedRowDataIds, setSelectedRowDataIds] = useState<any[]>(defaultSelectedIds || []);
  const [headerCheckedState, setHeaderCheckedState] = useState<CheckedState>(CheckedState.Unchecked);

  const showLoading = () => {
    if(divContainerRef.current){
      divContainerRef.current.classList.add('loading');
    }
  }

  const hideLoading = () => {
    if(divContainerRef.current){
      divContainerRef.current.classList.remove('loading');
    }
  }

  const loadData = (data:any[] | RemoteDataFn, pageIndex:number, pageSize:number, filterData:any, sortBy?:string, sortOrder?:string) => {
    showLoading();
    DataService.loadData(data, pageIndex, pageSize, filterData, sortBy, sortOrder)
      .then(function(result:DataResultModel){
        setTotalRows(result.totalRows);
        setShowingData(result.currentPageData);
        if(result.filteredData)
        {
          setFilteredData(result.filteredData);
        }

        hideLoading();
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
       newIds = typeof(data) === 'function' ? [] : data.map((item:any) => item[dataIdField]);
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
    <div ref={divContainerRef} className={`NiceTableContainer ${classes.tableContainer}`}>
      <table>
      <TableHead 
          columns={columns} 
          sortable={sortable} 
          defaultSortBy={sortBy} 
          defaultSortOrder={sortOrder}
          onSort={handleOnSort}
          selectable={selectable}
          hideSelectionBox={isRemoteData}
          checkedState={headerCheckedState}
          onSelectionChange={handleHeaderSelectionChange}
           />
      <TableBody 
          columns={columns} 
          data={showingData} 
          selectable={selectable} 
          onSelectionChange={handleSelectionChange} 
          selectedRowDataIds={selectedRowDataIds}
          fullRowSelectable={fullRowSelectable}
          />
      </table>  
    </div>
    { (hasPagination || (exportButtons && exportButtons.length > 0)) &&
    (
      <TableFooter>
        {exportButtons && exportButtons.length > 0 && 
          <TableFooterToolbar columns={columns} exportButtons={exportButtons} exportingData={(isRemoteData ? [] : (filteredData.length > 0 ? filteredData : showingData))} />
          }
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