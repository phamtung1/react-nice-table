import React from 'react';

import NiceTable from '../components/NiceTable';

export default {
  component:NiceTable,
  title: 'NiceTable',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const tableColumns:any[] = [
  { title: 'Id', field: 'id', align:'center'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email'},
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


export const Default = () => <NiceTable columns={tableColumns} data={tableData} />;