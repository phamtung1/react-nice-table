
export type ColumnModel = {
    title: string;
    field?: string;
    align?: string;
    width?: any;
    render?(rowData:any): void;
}

export type DataResultModel = {
    currentPageData:any[];
    totalRows:number; // totalrows of filteredData
    filteredData?:any[];
}

export type FilterDataModel = {
  [key: string]: {
    value: any,
    rule: string
  }
}

export type DataQueryModel = {
  pageIndex:number, 
  pageSize:number, 
  filterData:any, 
  sortBy?:string, 
  sortOrder?:string
}

export type RemoteDataFn = (param:DataQueryModel) => Promise<DataResultModel>;

export type ExportButtonModel = {
  icon?:string, 
  label?:string, 
  exportFn?(columns:ColumnModel[], data:any[]):void;
}

export type ActionButtonModel = {
  icon:string, 
  tooltip?:string, 
  onClick?(rowData:any):void;
}
