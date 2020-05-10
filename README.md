# react-nice-table
React-nice-table is a component for displaying data in a tabular format. It's very simple to use and customizable for different use cases.

<a href="https://npm.im/react-nice-table"><img src="https://badgen.net/npm/license/react-nice-table"></a>
<a href="https://npm.im/react-nice-table"><img src="https://badgen.net/npm/v/react-nice-table"></a>
<a href="https://npm.im/react-nice-table"><img src="https://badgen.net/npm/dm/react-nice-table"></a>
<a href="https://bundlephobia.com/result?p=react-nice-table"><img src="https://badgen.net/bundlephobia/minzip/react-nice-table"></a>
[![Build Status](https://travis-ci.org/phamtung1/react-nice-table.svg?branch=master)](https://travis-ci.org/phamtung1/react-nice-table)
## Installation

```
npm i react-nice-table
```
or yarn:
```
yarn add react-nice-table
```
Add material icons font if you use features related to it (pagination, sorting, footer toolbar, selection):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

## Demo

[DEMO with Code examples](https://phamtung1.github.io/react-nice-table/storybook-static/)

![alt text](https://raw.githubusercontent.com/phamtung1/react-nice-table/master/screenshots/table1.png)

## Features
* Fixed Header
* Pagination
* Customer Filtering
* Custom Rendering
* Footer Toolbar
* Remote Data Loading 
* Sorting
* Selection

## Code example
```js

const tableColumns:ColumnModel[] = [
    { title: 'Id', field: 'id', align:'center', width: '50px'},
    { title: 'Avatar',  width: '50px', render: (rowData:any) => <img src={`https://api.adorable.io/avatars/36/${rowData.id}.png`}/>},
    { title: 'Name', field: 'name'},
    { title: 'Email', field: 'email', render: (rowData:any) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a> },
    { title: 'Age', field: 'age', align:'right'}
  ];

<NiceTable 
  columns={tableColumns} 
  data={tableData} 
  height="300px"
  hasPagination={true}
  footerToolbar={
    <>
  <IconButton icon='save' label='CSV' onClick={() => alert('Export CSV')}/>
  <IconButton icon='save_alt' label='PDF' onClick={() => alert('Export PDF')}/>
  </>
  }
/>
```
## Api

NiceTable
```js
type NiceTableProps = {
  columns: ColumnModel[];
  data: any[] | RemoteDataFn;
  hasPagination?: boolean;
  pageSizeOptions?: number[];
  height?:string;
  width?:string;
  footerToolbar?: React.ReactNode;
  filterComponent?: React.ReactNode;
  filterData?: FilterDataModel;
  sortable?:boolean;
  defaultSortBy?:string;
  defaultSortOrder?:string;
  selection?:boolean;
  onSelectionChange?(selectedRowDataIds:any[]):void;
  defaultSelectedIds?:any[];
  dataIdField?:string;
}
```

ColumnModel:
```js
type ColumnModel = {
    title: string;
    field?: string;
    align?: string;
    width?: any;
    render?(rowData:any): void;
}
```

# TODO List
- [ ] Localization
- [ ] Actions column

# Licensee
MIT