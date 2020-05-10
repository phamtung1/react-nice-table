import React, { FC  } from 'react';
import {ExportButtonModel, ColumnModel} from '../types/DataModel';
import Button from '../core-components/Button';

type Props = {
  exportButtons?:ExportButtonModel[];
  exportingData?:any[];
  columns?:ColumnModel[];
}

const TableFooterToolbar:FC<Props> = ({exportButtons, exportingData, columns}) => {
  
  return (
    <div className='NiceTable-FooterToolbar'>
    {exportButtons?.map((item:ExportButtonModel, index:number) => {
      return <Button key={index} icon={item.icon} label={item.label} onClick={() => { 
        item.exportFn && item.exportFn(columns || [], exportingData || []);
       } }/>
    })
    }
  </div>
  );
}

export default TableFooterToolbar;