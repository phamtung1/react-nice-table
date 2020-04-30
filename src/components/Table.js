import React from 'react';
import './style.css';

import TableCell from './TableCell';
import TableColumn from './TableColumn';

export default function Table({ style, columns, data }) {
 
  return (
    <div class="table-container" style={style}>
    <div class="table">
      {columns.map((column) => {
        return (
          <TableColumn title={column.title}>
          {data.map((item) => {
                return (
                  <TableCell>{item[column.field]}</TableCell>          
                );
              })}
          </TableColumn> );
      })}
    </div>       
    </div>
  );
}