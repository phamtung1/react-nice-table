export function createData(length:number){
    const tableData:any[] = [];

    for(let i = 0; i < length; i++){ 
        const id = i + 1;
      const name = 'Name' + id;
      tableData.push({ 
        id: id, 
        name: name, 
        email: name +'@foo.com',
        age: Math.floor(Math.random() * 10),
        address:  'foo'
      });
    }

    return tableData;
}
