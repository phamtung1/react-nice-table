import React from 'react';

import { ColumnModel,ActionButtonModel, ExportButtonModel } from '../../src/types/DataModel';
import NiceTable from '../../src/NiceTable';
import { createData } from '../storyhelper';

export default {
  component:NiceTable,
  title: '1-Basic',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const tableData = createData(50)

const actionButtons:ActionButtonModel[] = [
  { icon: 'save', tooltip:'Save', onClick:(rowData:any) => alert(JSON.stringify(rowData))},
  { icon: 'delete', tooltip:'Delete', onClick:(rowData:any) => alert(JSON.stringify(rowData))},
  { icon: 'edit', tooltip:'Edit', onClick:(rowData:any) => alert(JSON.stringify(rowData))}
];
const exportButtons:ExportButtonModel[] = [
  {
    icon:'save',
    label:'CSV',
    exportFn: (columns:ColumnModel[], data:any[]) => {
      alert('Implement a code to export CSV');
    }
  },
  {
    icon:'picture_as_pdf',
    label:'',
    exportFn: (columns:ColumnModel[], data:any[]) => {
      alert('Implement a code to export PDF');
    }
  }
];

export const FullFeatures = () => {
  const tableColumns:ColumnModel[] = [
    { title: 'Id', field: 'id', align:'center', width: '50px'},
    { title: 'Avatar',  width: '50px', render: (rowData:any) => <img src={`https://api.adorable.io/avatars/36/${rowData.id}.png`}/>},
    { title: 'Name', field: 'name'},
    { title: 'Email', field: 'email', render: (rowData:any) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a> },
    { title: 'Age', field: 'age', align:'right'}
  ];

  return <NiceTable columns={tableColumns}  data={tableData} hasPagination={true} actionButtons={actionButtons} sortable={true} height="400px" exportButtons={exportButtons} />;
}