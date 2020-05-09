import React, { FC } from 'react';
import { ColumnModel } from '../types/DataModel';
import TableCell from './TableCell';
import SelectionTableCell from '../table-components/SelectionTableCell';
import {CheckedState} from '../types/Enum';
import AppConsts from '../types/AppConsts';

type Props = {
  columns: ColumnModel[];
  data: any[];
  selection?:boolean;
  onSelectionChange?(rowDataId:any, newState: CheckedState):void;
  selectedRowDataIds?:any[];
  dataIdField?:string;
}

const TableBody:FC<Props> = ({data, columns, selection, onSelectionChange, selectedRowDataIds, dataIdField = AppConsts.DefaultDataIdField}) => {

  const renderBodyData = () => {
    return data.map((item:any, rowIndex:number) => {
      
      const handleSelectionChange = (rowDataId:any, newState: CheckedState) => {
        onSelectionChange && onSelectionChange(rowDataId, newState);
      };

      const checkState = selectedRowDataIds && selectedRowDataIds.indexOf(item[dataIdField]) > -1 ? CheckedState.Checked : CheckedState.Unchecked;
      
      const selectionCell = selection && <SelectionTableCell checkedState={checkState} rowDataId={item[dataIdField]} onChange={handleSelectionChange}/>;

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