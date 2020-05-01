import React from 'react';
import TableHeadCell from './TableHeadCell';

export default function TableHead({columns}) {
  return (
    <thead>
        <tr>
        {columns.map((column) => {
          return (
            <TableHeadCell align={column.align}>{column.title}</TableHeadCell> 
            );
        })}
        </tr>
      </thead>
  );
}