import React, { FC } from 'react';
import TableHeadCell from './TableHeadCell';

type Props = {
  columns: any[];
}

const TableHead:FC<Props> = ({columns}) => {
  
  return (
    <thead>
        <tr>
        {columns.map((column:any, colIndex:number) => {
          return (
            <TableHeadCell key={colIndex} align={column.align}>{column.title}</TableHeadCell> 
            );
        })}
        </tr>
      </thead>
  );
}

export default TableHead;