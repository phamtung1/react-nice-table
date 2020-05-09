import React from 'react';

import { ColumnModel } from '../src/types/DataModel';
import NiceTable from '../src/NiceTable';

import Button from '../src/core-components/Button';
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
  { title: 'Age', field: 'age', align:'right'}
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
    <Button icon='save' label='CSV' onClick={() => alert('Export CSV')}/>
    <Button icon='save_alt' label='PDF' onClick={() => alert('Export PDF')}/>
    </>
    }
/>;