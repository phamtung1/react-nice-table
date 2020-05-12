import React from 'react';

import { ColumnModel } from '../../src/types/DataModel';
import NiceTable from '../../src/NiceTable';
import { createData } from '../storyhelper';

export default {
  title: '4-Selection',
  excludeStories: /.*Data$/
};

const tableData = createData(50);
const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'}
];

export const Basic = () => {
  const [selectedIds, setSelectedIds] = React.useState<any[]>([]);
  const handleSelectionChange = (selectedRowDataIds:any[]) => {
    setSelectedIds(selectedRowDataIds);
  }
  return (
    <>
    <div>A limitation: In remote data mode, checkbox will not appear in header row.</div>
    <div>The data must have the 'id' property. You can change it with the prop 'dataIdField'</div>
  <NiceTable 
      columns={tableColumns} 
      data={tableData} 
      hasPagination={true} 
      height="300px" 
      selectable={true} 
      onSelectionChange={handleSelectionChange}
      dataIdField='id'/>
  <div>Selected Ids: [{selectedIds.join(',')}]</div>
  </>
  );
}