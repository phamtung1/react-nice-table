import React from 'react';

import { ColumnModel, ExportButtonModel } from '../../src/types/DataModel';
import NiceTable from '../../src/NiceTable';
import { createData } from '../storyhelper';

export default {
  component:NiceTable,
  title: 'Export'
};

const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'}
];

const tableData = createData(20);
const exportButtons:ExportButtonModel[] = [
  {
    icon:'save',
    label:'CSV',
    exportFn: (columns:ColumnModel[], data:any[]) => {
      alert('Implement a code to export ' + data.length +' rows');
    }
  }
];
export const Default = () => 
  <NiceTable 
    columns={tableColumns} 
    data={tableData} 
    height="300px"
    exportButtons={exportButtons}
    hasPagination={true}
/>;