import React from 'react';

import ColumnModel from '../src/types/ColumnModel';
import NiceTable from '../src/NiceTable';
// import { createData } from './storyhelper';

export default {
  component:NiceTable,
  title: 'NiceTable',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => {
  
  // function to generate sample data
   function createData(length:number, fromIndex: number = 0){
    const tableData:any[] = [];

    for (let i = 0; i < length; i++){ 
      const id = fromIndex++;
      const name = 'Name' + id;
      tableData.push({ id: id,  name: name,  email: name +'@foo.com', age: Math.floor(Math.random() * 10)});
    }

    return tableData;
  }


  const tableData = createData(50);

  const tableColumns:ColumnModel[] = [
    { title: 'Id', field: 'id', align:'center', width: '50px'},
    { title: 'Name', field: 'name'},
    { title: 'Email', field: 'email' },
    { title: 'Age', field: 'age', align:'right'}
  ];
  
  return <NiceTable columns={tableColumns} data={tableData} height="300px"/>;
}