export function createData(length:number, fromIndex: number = 0){
    const tableData:any[] = [];

    for (let i = 0; i < length; i++){ 
      const id = fromIndex++;
      const name = 'Name' + id;
      tableData.push({ id: id,  name: name,  email: name +'@foo.com', age: Math.floor(Math.random() * 100)});
    }

    return tableData;
}
