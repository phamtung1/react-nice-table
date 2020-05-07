import React from 'react';

import ColumnModel from '../src/types/ColumnModel';
import NiceTable from '../src/NiceTable';
import { createData } from './storyhelper';

export default {
  component:NiceTable,
  title: 'NiceTable',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

  const tableColumns:ColumnModel[] = [
    { title: 'Id', field: 'id', align:'center', width: '50px'},
    { title: 'Name', field: 'name'},
    { title: 'Email', field: 'email' },
    { title: 'Age', field: 'age', align:'right'}
  ];
  

export const LargeDataSet = () => {
  const [tableData, setTableData] = React.useState<any[]>([]);

  const handleClearData = () => {
    setTableData([]);
  };

  const handleAddData = () => {
    const newData = createData(1000).concat(tableData);
    setTableData(newData);
  };

  return (
    <>
    <button onClick={handleClearData}>Clear Data</button>
    <button onClick={handleAddData} style={{margin: '0 10px'}}>Add 1000 rows</button>
    <span>Total rows = {tableData.length}</span>
    <NiceTable columns={tableColumns} data={tableData} height="300px" sortable={true}/>
  </>
  );
}