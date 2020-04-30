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
  { title: 'Age', field: 'age'},
];

const tableData = [];

for(let i = 1; i < 100; i++){
  tableData.push({ id: i, name: 'Name ' + i, age: Math.floor(Math.random() * 10) });
}


export const Default = () => <Table style={{}} columns={tableColumns} data={tableData} />;