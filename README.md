# react-nice-table
React-nice table is a component for displaying data in a tabular format. It's very simple to use and customizable for different use cases.

## Installation
Release soon

## Demo

[DEMO with Storybook](https://phamtung1.github.io/react-nice-table/storybook-static)

![alt text](https://raw.githubusercontent.com/phamtung1/react-nice-table/master/screenshots/table1.png)

## Features
* Fixed Header
* Pagination
* Custom Rendering
* Footer Toolbar
* Remote Data Loading 
## Code example
```js

const tableColumns:ColumnModel[] = [
  { title: 'Id', field: 'id', align:'center', width: '50px'},
  { title: 'Name', field: 'name'},
  { title: 'Email', field: 'email' },
  { title: 'Age', field: 'age', align:'right'},
  { title: 'Address', field: 'address' }
];

<NiceTable 
  columns={tableColumns} 
  data={tableData} 
  height="300px"
  hasPagination={true}
  footerToolbar={
    <>
  <IconButton icon='save' label='CSV' onClick={() => alert('Export CSV')}/>
  <IconButton icon='download' label='PDF' onClick={() => alert('Export PDF')}/>
  </>
  }
/>
```

## Coming Soon
- [x] Sorting
- [x] Filtering
- [x] Selection
- [x] Detail Panel