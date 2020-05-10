import React, { FC } from 'react';
import { ColumnModel } from '../types/DataModel';
import TableRow from './TableRow';
import {CheckedState} from '../types/Enum';
import AppConsts from '../types/AppConsts';

type Props = {
  columns: ColumnModel[];
  data: any[];
  selection?:boolean;
  onSelectionChange?(rowDataId:any, newState: CheckedState):void;
  selectedRowDataIds?:any[];
  fullRowSelectable?:boolean;
  dataIdField?:string;
}

const TableBody:FC<Props> = ({data, columns, selection, onSelectionChange, selectedRowDataIds, fullRowSelectable, dataIdField = AppConsts.DefaultDataIdField}) => {

  const renderBodyData = () => {
    return data.map((item:any, rowIndex:number) => {
      
      const handleSelectionChange = (rowDataId:any, newState: CheckedState) => {
        onSelectionChange && onSelectionChange(rowDataId, newState);
      };

      const isSelected = selectedRowDataIds && selectedRowDataIds.indexOf(item[dataIdField]) > -1;
      
      return <TableRow 
              key={rowIndex} 
              columns={columns} 
              rowData={item} 
              selection={selection} 
              selected={isSelected} 
              dataIdField={dataIdField}
              onSelectionChange={handleSelectionChange}
              fullRowSelectable={fullRowSelectable}
               />
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