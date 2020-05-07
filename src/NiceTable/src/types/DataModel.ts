
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