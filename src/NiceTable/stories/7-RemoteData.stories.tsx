import React from 'react';

import { ColumnModel, FilterDataModel, DataQueryModel, RemoteDataFn } from '../src/types/DataModel';
import NiceTable from '../src/NiceTable';
import { FilterComponentProps } from '../src/types/FilterComponentProps';
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
   
   const spanContentRef = React.useRef<any>(null);

  const handleSelectionChange = (selectedRowDataIds:any[]) => {
    if(spanContentRef.current){
      spanContentRef.current.innerHTML = selectedRowDataIds.join(',');
    }
  }
   
  const loadRemoteData:RemoteDataFn = (query:DataQueryModel) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Query data: ', query);
        resolve({
          data: createData(query.pageSize, query.pageIndex * query.pageSize),
          totalRows: 100
        });
      }, 500); // simulate request
    });
  }

  return (
    <>
  <NiceTable 
    filterData={filterData} 
    filterComponent={<CustomFilter onChange={setFilterData} />} 
    columns={tableColumns} 
    data={loadRemoteData} 
    height="300px"
    hasPagination={true}
    sortable={true}
    defaultSortBy="id"
    selection={true} onSelectionChange={handleSelectionChange}
    />
  <div>Selected Ids: [<span ref={spanContentRef}></span>]</div>
  </>
);
}