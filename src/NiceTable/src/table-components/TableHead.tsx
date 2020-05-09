import React, { FC } from 'react';
import { ColumnModel } from '../types/DataModel';
import TableHeadCell from './TableHeadCell';

type Props = {
  columns: ColumnModel[];
  sortable?:boolean;
  defaultSortBy?:string;
  defaultSortOrder?:string;
  onSort?(sortBy:string, sortOrder:string):void;
  selection?:boolean;
}

const TableHead:FC<Props> = ({columns, sortable, defaultSortBy, defaultSortOrder, onSort, selection}) => {
  
  defaultSortOrder = defaultSortOrder ?? 'asc';

  const handleOnSort = (sortBy:string, sortOrder:string) => {
    onSort && onSort(sortBy, sortOrder);
  }

  return (
    <thead>
        <tr>
          {selection && 
          <td><input type='checkbox' /></td>
          }
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