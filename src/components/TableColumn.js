import React from 'react';
import TableHeadCell from './TableHeadCell';

export default function TableColumn({title, children}) {
  return (
    <div class="table-col table-col--fixed-left">
    <TableHeadCell>{title}</TableHeadCell>
      {children}
    </div>
  );
}