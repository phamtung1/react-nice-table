import React from 'react';

import { ColumnModel, ActionButtonModel } from '../../src/types/DataModel';
import NiceTable from '../../src/NiceTable';
import { createData } from '../storyhelper';

export default {
  component:NiceTable,
  title: '2-Action Column',
  excludeStories: /.*Data$/
};

const tableData = createData(36);
const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'}
];

const actionButtons:ActionButtonModel[] = [
  { icon: 'save', tooltip:'Save', onClick:(rowData:any) => alert(JSON.stringify(rowData))},
  { icon: 'delete', tooltip:'Delete', onClick:(rowData:any) => alert(JSON.stringify(rowData))},
  { icon: 'edit', tooltip:'Edit', onClick:(rowData:any) => alert(JSON.stringify(rowData))}
];
export const MultipleActions = () => {
  return <NiceTable 
            columns={tableColumns} 
            data={tableData} 
            hasPagination={true} 
            height="300px"
            actionButtons={actionButtons}
            />;
}