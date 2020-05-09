import React, { FC } from 'react';
import { ColumnModel } from '../types/DataModel';
import TableCell from './TableCell';

type Props = {
  columns: ColumnModel[];
  data: any[];
  selection?:boolean;
}

const TableBody:FC<Props> = ({data, columns, selection}) => {

  const renderBodyData = () => {
    const selectionCell = selection && <TableCell><input type='checkbox' /></TableCell>
    return data.map((item:any, rowIndex:number) => {
      return (
        <tr key={rowIndex}>
          {selectionCell}
          {columns.map((column:ColumnModel, colIndex:number) => {
            const content = column.render ? column.render(item) : item[column.field!];
          return (
            <TableCell key={colIndex} align={column.align}>
              {content}
            </TableCell>          
          );
          })}
        </tr>);
      });
  }

  return (
    <tbody>
      {(!data || data.length === 0) ?
        (<tr><td colSpan={columns.length} style={{border:0, textAlign:'center'}}>No data available</td></tr>) :
        renderBodyData()
        }
      </tbody>
  );
}

export default TableBody;