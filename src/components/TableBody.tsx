import React, { FC } from 'react';
import TableCell from './TableCell';

type Props = {
  columns: any[];
  data: any[];
}

const TableBody:FC<Props> = ({data, columns}) => {
  return (
    <tbody>
        {data.map((item:any, rowIndex:number) => {
          return (
            <tr key={rowIndex}>
              {columns.map((column:any, colIndex:number) => {
              return (
                <TableCell key={colIndex} align={column.align}>{item[column.field]}</TableCell>          
              );
              })}
            </tr>);
          })}
      </tbody>
  );
}

export default TableBody;