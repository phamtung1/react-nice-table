import React, {useState} from 'react';

import { ColumnModel, FilterDataModel, ExportButtonModel } from '../../src/types/DataModel';
import NiceTable from '../../src/NiceTable';
import { FilterComponentProps } from '../../src/types/FilterComponentProps';
import { createData } from '../storyhelper';

import '../demo.css';

export default {
  component:NiceTable,
  title: '3-Export'
};

const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'}
];

const tableData = createData(50);
const exportButtons:ExportButtonModel[] = [
  {
    icon:'save',
    label:'Export CSV',
    exportFn: (columns:ColumnModel[], data:any[]) => {
      console.log(data)
      alert('Implement a code to export ' + data.length +' rows');
    }
  }
];

// Component containing filter controls  
const CustomFilter: React.FC<FilterComponentProps> = ({onChange}) => {
  const defaultFilterData:FilterDataModel = {
    name: {
      value: '',
      rule: ''
    }
  };

  const [filterData, setFilterData] = useState(defaultFilterData);

  const handleChangeName =(value:string) => {
    const newData = { ...filterData, name: { value : value, rule: filterData.name.rule }};
    setFilterData(newData)
    onChange && onChange(newData);
  }

  return (
    <div>
      <label>Name: </label>
      <input className='demo-control' type='text' onChange={(event:any) => handleChangeName(event.target.value)} />
    </div>
  );
}

export const ExportingWithFilters = () => {
  const [filterData, setFilterData] = useState(undefined);

  return (
    <NiceTable 
        filterData={filterData} 
        filterComponent={<CustomFilter onChange={setFilterData} />} 
        columns={tableColumns} 
        data={tableData} 
        sortable={true}
        exportButtons={exportButtons}
        hasPagination={true} 
        height="300px"/>
  );
}