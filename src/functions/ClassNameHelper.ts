const CellAlignClassMap = {
  right: 'NiceTableCell-alignRight',
  center: 'NiceTableCell-alignCenter'
};

export default {
  getCellAlignClass: (align:string) => {
    return CellAlignClassMap[align];
  }
};