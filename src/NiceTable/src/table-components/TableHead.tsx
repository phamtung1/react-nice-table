import React, { FC } from 'react';
import { ColumnModel } from '../types/DataModel';
import TableHeadCell from './TableHeadCell';
import SelectionTableCell from '../table-components/SelectionTableCell';
import {CheckedState} from '../types/Enum';

type Props = {
  columns: ColumnModel[];
  sortable?:boolean;
  defaultSortBy?:string;
  defaultSortOrder?:string;
  onSort?(sortBy:string, sortOrder:string):void;
  selection?:boolean;
  checkedState?:CheckedState;
  onSelectionChange?(newState:CheckedState):void;
}

const TableHead:FC<Props> = ({columns, sortable, defaultSortBy, defaultSortOrder, onSort, selection,checkedState, onSelectionChange}) => {
  
  defaultSortOrder = defaultSortOrder ?? 'asc';

  const handleOnSort = (sortBy:string, sortOrder:string) => {
    onSort && onSort(sortBy, sortOrder);
  }

  const handleSelectionChange = (newState:CheckedState) => {
    onSelectionChange && onSelectionChange(newState);
  }

  return (
    <thead>
        <tr>
        {selection && <SelectionTableCell checkedState={checkedState} onChange={(_:any, newState:CheckedState) => handleSelectionChange(newState)}/>}
        {columns.map((column:ColumnModel, colIndex:number) => {
          const cellSortOrder = defaultSortBy === column.field ? defaultSortOrder : undefined; 
          return (
            <TableHeadCell 
                key={colIndex} 
                align={column.align} 
                width={column.width}
                sortKey={sortable ? column.field : undefined}
                sortOrder={sortable ? cellSortOrder : undefined}
                onSort={handleOnSort}
                >
                  {column.title}
            </TableHeadCell> 
            );
        })}
        </tr>
      </thead>
  );
}

export default TableHead;