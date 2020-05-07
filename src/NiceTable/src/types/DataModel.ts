
export type ColumnModel = {
    title: string;
    field?: string;
    align?: string;
    width?: any;
    render?(rowData:any): void;
}

export type DataResultModel = {
    data:any[],
    totalRows:number;
}

export type FilterDataModel = {
  [key: string]: {
    value: any,
    rule: string
  }
}

export type RemoteDataFn = (param:any) => Promise<DataResultModel>;

export type DataQueryModel = {
  pageIndex:number, 
  pageSize:number, 
  filterData:any, 
  sortBy?:string, 
  sortOrder?:string
}