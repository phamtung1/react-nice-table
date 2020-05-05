import React from 'react';

import ColumnModel from '../src/types/ColumnModel';
import NiceTable from '../src/NiceTable';

import IconButton from '../src/core/IconButton';
import { createData } from './storyhelper';

export default {
  component:NiceTable,
  title: 'NiceTable',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'},
  { title: 'Address', field: 'address' }
];

const tableData = createData(20);
// add this link to your app <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
// List icons https://material.io/resources/icons/?style=baseline
export const FooterToolbar = () => 
  <NiceTable 
    columns={tableColumns} 
    data={tableData} 
    height="300px"
    footerToolbar={
      <>
    <IconButton icon='save' label='CSV' onClick={() => alert('Export CSV')}/>
    <IconButton icon='save_alt' label='PDF' onClick={() => alert('Export PDF')}/>
    </>
    }
/>;