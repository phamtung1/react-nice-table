import React, {useState} from 'react';

import { ColumnModel, FilterDataModel } from '../src/types/DataModel';
import NiceTable from '../src/NiceTable';
import { FilterComponentProps } from '../src/types/FilterComponentProps';
import { createData } from './storyhelper';

import './demo.css';

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

const tableData = createData(50);

// Component containing filter controls  
const CustomFilter: React.FC<FilterComponentProps> = ({onChange}) => {
  const defaultFilterData:FilterDataModel = {
    name: {
      value: '',
      rule: '' // always use indexOf() for string value
    },
    age: {
      value: 0,
      rule: '>=' // filter all ages greater than this
    }
  };

  const [filterData, setFilterData] = useState(defaultFilterData);

  const handleChangeName =(value:string) => {
    const newData = { ...filterData, name: { value : value, rule: filterData.name.rule }};
    setFilterData(newData)
    onChange && onChange(newData);
  }

  const handleChangeAge =(value:number) => {
    const newData = { ...filterData, age: { value : value, rule: filterData.age.rule }};
    setFilterData(newData);
    onChange && onChange(newData);
  }

  return (
    <div>
      <label>Name: </label>
      <input className='demo-control' type='text' onChange={(event:any) => handleChangeName(event.target.value)} />
      <label>Age (>=): </label>
      <input className='demo-control' type='number' onChange={(event:any) => handleChangeAge(parseInt(event.target.value))} />
    </div>
  );
}

export const CustomFiltering = () => {
  const [filterData, setFilterData] = useState(undefined);

  return (
    <NiceTable 
        filterData={filterData} 
        filterComponent={<CustomFilter onChange={setFilterData} />} 
        columns={tableColumns} 
        data={tableData} 
        hasPagination={true} height="300px"/>
  );
}