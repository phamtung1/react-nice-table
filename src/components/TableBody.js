import React from 'react';
import TableCell from './TableCell';

export default function TableBody({data, columns}) {
  return (
    <tbody>
        {data.map((item) => {
          return (
            <tr>
              {columns.map((column) => {
              return (
                <TableCell align={column.align}>{item[column.field]}</TableCell>          
              );
              })}
            </tr>);
          })}
      </tbody>
  );
}