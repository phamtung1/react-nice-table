import React from 'react';
import { action } from '@storybook/addon-actions';

import Table from '../components/Table';

export default {
  component:Table,
  title: 'Table',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const tableColumns = [
  { title: 'Id', field: 'id'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email'},
  { title: 'Age', field: 'age'},
  { title: 'Address', field: 'address' }
];

const tableData = [];

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


export const Default = () => <Table style={{}} columns={tableColumns} data={tableData} />;