import React, { FC } from 'react';
import { ColumnModel, ActionButtonModel } from '../types/DataModel';
import TableCell from './TableCell';
import SelectionTableCell from '../table-components/SelectionTableCell';
import {CheckedState} from '../types/Enum';
import AppConsts from '../types/AppConsts';
import IconButton from '../core-components/IconButton';

type Props = {
  columns: ColumnModel[];
  rowData: any;
  onSelectionChange?(rowDataId:any, newState: CheckedState):void;
  selectable?:boolean;
  selected?:boolean;
  fullRowSelectable?:boolean;
  dataIdField?:string;
  actionButtons?:ActionButtonModel[];
}

const TableRow:FC<Props> = ({
  columns, rowData, onSelectionChange, selectable, selected, fullRowSelectable, 
  dataIdField = AppConsts.DefaultDataIdField, actionButtons}) => {

  const handleCheckboxSelectionChange = () => {
    if(fullRowSelectable){
      return;
    }

    const newState = selected ? CheckedState.Unchecked : CheckedState.Checked;
    onSelectionChange && onSelectionChange(rowData[dataIdField], newState);
  };

  const handleRowSelectionChange = () => {
       if(!selectable || !fullRowSelectable){
         return;
       }

       const newState = selected ? CheckedState.Unchecked : CheckedState.Checked;
       onSelectionChange && onSelectionChange(rowData[dataIdField], newState);
   };

  
   const createActionButtons = (actionButtons?:ActionButtonModel[]) => {
     if(!actionButtons || actionButtons.length === 0)
     {
       return null;
     }

     return (
       <td>
        {actionButtons.map((action:ActionButtonModel, index:number) => {
          return <IconButton key={index} tooltip={action.tooltip} icon={action.icon} onClick={() => action.onClick && action.onClick(rowData)}></IconButton>;
        })}
       </td>
     );
   }

  const checkState = selected ? CheckedState.Checked : CheckedState.Unchecked;
  
  const selectionCell = selectable && <SelectionTableCell checkedState={checkState} rowDataId={rowData[dataIdField]} onChange={handleCheckboxSelectionChange}/>;
  const rowClassName = selectable && checkState === CheckedState.Checked ? 'NiceTable-Row-Selected' : undefined;
  
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
      {createActionButtons(actionButtons)}
    </tr>);
}

export default TableRow;