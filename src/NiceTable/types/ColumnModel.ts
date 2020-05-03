
type ColumnModel = {
    title: string;
    field?: string;
    align?: string;
    width?: any;
    render?(rowData:any): void;
}

export default ColumnModel;