import React, { FC } from 'react';
import { ColumnModel } from '../types/DataModel';
import TableCell from './TableCell';
import SelectionTableCell from '../table-components/SelectionTableCell';
import {CheckedState} from '../types/Enum';
import AppConsts from '../types/AppConsts';

type Props = {
  columns: ColumnModel[];
  rowData: any;
  onSelectionChange?(rowDataId:any, newState: CheckedState):void;
  selection?:boolean;
  selected?:boolean;
  fullRowSelectable?:boolean;
  dataIdField?:string;
}

const TableRow:FC<Props> = ({columns, rowData, onSelectionChange, selection, selected, fullRowSelectable, dataIdField = AppConsts.DefaultDataIdField}) => {

  const handleCheckboxSelectionChange = () => {
    if(fullRowSelectable){
      return;
    }

    const newState = selected ? CheckedState.Unchecked : CheckedState.Checked;
    onSelectionChange && onSelectionChange(rowData[dataIdField], newState);
  };

  const handleRowSelectionChange = () => {
       if(!selection || !fullRowSelectable){
         return;
       }

       const newState = selected ? CheckedState.Unchecked : CheckedState.Checked;
       onSelectionChange && onSelectionChange(rowData[dataIdField], newState);
 };

  const checkState = selected ? CheckedState.Checked : CheckedState.Unchecked;
  
  const selectionCell = selection && <SelectionTableCell checkedState={checkState} rowDataId={rowData[dataIdField]} onChange={handleCheckboxSelectionChange}/>;
  const rowClassName = selection && checkState === CheckedState.Checked ? 'NiceTable-Row-Selected' : '';
  
  return (
    <tr className={rowClassName} onClick={handleRowSelectionChange}>
      {selectionCell}
      {columns.map((column:ColumnModel, colIndex:number) => {
        const content = column.render ? column.render(rowData) : rowData[column.field!];
      return (
        <TableCell key={colIndex} align={column.align}>
          {content}
        </TableCell>          
      );
      })}
    </tr>);
}

export default TableRow;