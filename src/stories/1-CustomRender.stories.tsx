import React from 'react';

import ColumnModel from '../types/ColumnModel';
import NiceTable from '../components/NiceTable';

export default {
  component:NiceTable,
  title: 'NiceTable',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Avatar',  width: '50px', render: (rowData:any) => <img src={`https://api.adorable.io/avatars/36/${rowData.id}.png`}/>},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email', render: (rowData:any) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a> },
  { title: 'Age', field: 'age', align:'right'},
  { title: 'Address', field: 'address' }
];

const tableData:any[] = [];

for(let i = 1; i < 100; i++){ 
  const name = 'Name' + i;
  tableData.push({ 
    id: i, 
    name: name, 
    email: name +'@foo.com',
    age: Math.floor(Math.random() * 10),
    address:  'foo'
  });
}

export const CustomRendering = () => <NiceTable columns={tableColumns} data={tableData} hasPagination={true} height="300px"/>;