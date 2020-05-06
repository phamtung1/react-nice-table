import React from 'react';

import ColumnModel from '../src/types/ColumnModel';
import NiceTable from '../src/NiceTable';
import { FilterComponentProps } from '../src/types/FilterComponentProps';
import { FilterDataType } from '../src/types/FilterDataType';
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
  { title: 'Age', field: 'age', align:'right'}
];

const CustomFilter: React.FC<FilterComponentProps> = ({onChange}) => {
  const defaultFilterData:FilterDataType = {
    name: {
      value: '',
      rule: '' // always use indexOf() for string value
    },
    age: {
      value: 0,
      rule: '>=' // filter all ages greater than this
    }
  };

  const [filterData, setFilterData] = React.useState(defaultFilterData);

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

export const RemoteDataLoading = () => {
   const [filterData, setFilterData] = React.useState(undefined);

  return (
    <>
    <div>Check the console log to see the query data</div>
  <NiceTable 
    filterData={filterData} 
    filterComponent={<CustomFilter onChange={setFilterData} />} 
    columns={tableColumns} 
    data={(query:any) => {
      console.log(JSON.stringify(query)); // {"pageIndex":0,"pageSize":10,"filterData":{"name":{"value":"2","rule":""},"age":{"value":0,"rule":">="}}}
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            data: createData(query.pageSize, query.pageIndex * query.pageSize),
            totalRows: 100
          });
        }, 500); // simulate request
    })
    }} 
    height="300px"
    hasPagination={true}
    sortable={true}
    defaultSortBy="id"
/>
</>
);
}