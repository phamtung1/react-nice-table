import React from 'react';

import { ColumnModel } from '../../src/types/DataModel';
import NiceTable from '../../src/NiceTable';
import { createData } from '../storyhelper';

export default {
  component:NiceTable,
  title: 'Selection',
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

export const FullRowSelectable = () => {
  const [selectedIds, setSelectedIds] = React.useState<any[]>([]);
  const handleSelectionChange = (selectedRowDataIds:any[]) => {
    setSelectedIds(selectedRowDataIds);
  }
  return (
    <>
  <NiceTable 
      columns={tableColumns} 
      data={tableData} 
      hasPagination={true} 
      height="300px" 
      selectable={true} 
      onSelectionChange={handleSelectionChange}
      dataIdField='id'
      fullRowSelectable={true}
      />
  <div>Selected Ids: [{selectedIds.join(',')}]</div>
  </>
  );
}