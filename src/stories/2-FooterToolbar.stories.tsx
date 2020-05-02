import React from 'react';

import ColumnModel from '../types/ColumnModel';
import NiceTable from '../components/NiceTable';

import IconButton from '../components/core/IconButton';
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

export const FooterToolbar = () => 
  <NiceTable 
    columns={tableColumns} 
    data={tableData} 
    height="300px"
    hasPagination={true}
    footerToolbar={
      <>
    <IconButton icon='save' label='CSV' onClick={() => alert('Export CSV')}/>
    <IconButton icon='download' label='PDF' onClick={() => alert('Export PDF')}/>
    </>
    }
/>;