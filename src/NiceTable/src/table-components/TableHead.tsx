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
  selectable?:boolean;
  hideSelectionBox?:boolean;
  checkedState?:CheckedState;
  onSelectionChange?(newState:CheckedState):void;
  actionButtonsCount:number;
}

const TableHead:FC<Props> = ({columns, sortable, defaultSortBy, defaultSortOrder, onSort, 
  selectable, hideSelectionBox,checkedState, onSelectionChange, actionButtonsCount = 0}) => {
  
  defaultSortOrder = defaultSortOrder ?? 'asc';

  const handleOnSort = (sortBy:string, sortOrder:string) => {
    onSort && onSort(sortBy, sortOrder);
  }

  const handleSelectionChange = (newState:CheckedState) => {
    onSelectionChange && onSelectionChange(newState);
  }

  const getSelectionCell = () => {
    if(!selectable) {
      return undefined;
    }
    
    return <SelectionTableCell hideCheckbox={hideSelectionBox} checkedState={checkedState} onChange={(_:any, newState:CheckedState) => handleSelectionChange(newState)}/>
  }

  return (
    <thead>
        <tr>
        { getSelectionCell() }
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
        {actionButtonsCount > 0 && <TableHeadCell align='center' width={35 * actionButtonsCount}>{ actionButtonsCount > 1 ? 'Actions' : undefined}</TableHeadCell>}
        </tr>
      </thead>
  );
}

export default TableHead;