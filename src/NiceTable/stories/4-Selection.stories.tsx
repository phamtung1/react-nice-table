import React from 'react';

import { ColumnModel } from '../src/types/DataModel';
import NiceTable from '../src/NiceTable';
import { createData } from './storyhelper';

export default {
  component:NiceTable,
  title: 'NiceTable',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

const tableData = createData(50);
const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'}
];

export const Selection = () => {
  const [selectedIds, setSelectedIds] = React.useState<any[]>([]);
  const handleSelectionChange = (selectedRowDataIds:any[]) => {
    setSelectedIds(selectedRowDataIds);
  }
  return (
    <>
    <div>A limitation: Header will not show checkbox in remote data mode.</div>
  <NiceTable columns={tableColumns} data={tableData} hasPagination={true} height="300px" selection={true} onSelectionChange={handleSelectionChange}/>
  <div>Selected Ids: [{selectedIds.join(',')}]</div>
  </>
  );
}