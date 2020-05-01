import React, { FC } from 'react';
import ColumnModel from '../types/ColumnModel';
import TableHeadCell from './TableHeadCell';

type Props = {
  columns: ColumnModel[];
}

const TableHead:FC<Props> = ({columns}) => {
  
  return (
    <thead>
        <tr>
        {columns.map((column:ColumnModel, colIndex:number) => {
          return (
            <TableHeadCell key={colIndex} align={column.align} width={column.width}>{column.title}</TableHeadCell> 
            );
        })}
        </tr>
      </thead>
  );
}

export default TableHead;