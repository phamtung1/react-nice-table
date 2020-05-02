# react-nice-table

[Demo](https://phamtung1.github.io/react-nice-table/storybook-static)

![alt text](https://raw.githubusercontent.com/phamtung1/react-nice-table/master/screenshots/table1.png)

```html
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