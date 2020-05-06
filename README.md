# react-nice-table
React-nice-table is a component for displaying data in a tabular format. It's very simple to use and customizable for different use cases.

[![Build Status](https://travis-ci.org/phamtung1/react-nice-table.svg?branch=master)](https://travis-ci.org/phamtung1/react-nice-table)
## Installation

```
npm i react-nice-table
```
or yarn:
```
yarn add react-nice-table
```
Add material icons font if you some features related to it:

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

NiceGrid
```js
type Props = {
  columns: ColumnModel[];
  data: any; // array or function (for remote data)
  hasPagination?: boolean;
  pageSizeOptions?: number[];
  height?:string;
  width?:string;
  footerToolbar?: React.ReactNode;
  filterComponent?: React.ReactNode;
  filterData?: any;
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

## Coming Soon
- [x] Sorting
- [x] Selection
- [ ] Detail Panel
- [ ] Build-in Filter