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

const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'},
  { title: 'Address', field: 'address' }
];

export const RemoteDataLoading = () => 
  <NiceTable 
    columns={tableColumns} 
    data={(query:any) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            data: createData(query.pageSize, query.pageIndex * query.pageSize),
            totalRows: 100
          });
        }, 1000);
    })
    }} 
    height="300px"
    hasPagination={true}
/>;