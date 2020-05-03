import React from 'react';

import ColumnModel from '../src/types/ColumnModel';
import NiceTable from '../src/NiceTable';
import { createData } from './storyhelper';

export default {
  component:NiceTable,
  title: 'NiceTable',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const tableData = createData(5)

export const CustomRendering = () => {
  const tableColumns:ColumnModel[] = [
    { title: 'Id', field: 'id', align:'center', width: '50px'},
    { title: 'Avatar',  width: '50px', render: (rowData:any) => <img src={`https://api.adorable.io/avatars/36/${rowData.id}.png`}/>},
    { title: 'Name', field: 'name'},
    { title: 'Email', field: 'email', render: (rowData:any) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a> },
    { title: 'Age', field: 'age', align:'right'}
  ];

  return <NiceTable columns={tableColumns} data={tableData}/>;
}