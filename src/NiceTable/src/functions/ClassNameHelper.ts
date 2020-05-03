type ObjectStringType = {
  [key: string]: string
}

const CellAlignClassMap : ObjectStringType = {
  right: 'NiceTableCell-alignRight',
  center: 'NiceTableCell-alignCenter'
};

export default {
  getCellAlignClass: (align?:string) => {
    return align ? CellAlignClassMap[align] : undefined;
  }
};