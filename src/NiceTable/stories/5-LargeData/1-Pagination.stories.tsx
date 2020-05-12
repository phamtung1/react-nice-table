import React from 'react';

import { ColumnModel } from '../../src/types/DataModel';
import NiceTable from '../../src/NiceTable';
import { createData } from '../storyhelper';

export default {
  component:NiceTable,
  title: '5-Large Data (5000 Rows)',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

  const tableColumns:ColumnModel[] = [
    { title: 'Id', field: 'id', align:'center', width: '50px'},
    { title: 'Name', field: 'name'},
    { title: 'Email', field: 'email' },
    { title: 'Age', field: 'age', align:'right'}
  ];
  
const data = createData(5000);
export const Pagination = () => {
  const [tableData, setTableData] = React.useState<any[]>(data);

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
    <NiceTable columns={tableColumns} data={tableData} height="300px" sortable={true} hasPagination={true} pageSizeOptions={[100,500,1000]}/>
  </>
  );
}