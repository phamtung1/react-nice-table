import React, { FC } from 'react';
import ColumnModel from '../types/ColumnModel';
import TableCell from './TableCell';

type Props = {
  columns: ColumnModel[];
  data: any[];
}

const TableBody:FC<Props> = ({data, columns}) => {
  return (
    <tbody>
        {data.map((item:any, rowIndex:number) => {
          return (
            <tr key={rowIndex}>
              {columns.map((column:ColumnModel, colIndex:number) => {
                const content = column.render ? column.render(item) : item[column.field!];
              return (
                <TableCell key={colIndex} align={column.align}>
                  {content}
                </TableCell>          
              );
              })}
            </tr>);
          })}
      </tbody>
  );
}

export default TableBody;