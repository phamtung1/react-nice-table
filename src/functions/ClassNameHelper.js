const CellAlignClassMap = {
  right: 'NiceTableCell-alignRight',
  center: 'NiceTableCell-alignCenter'
};

export default {
  getCellAlignClass: (align) => {
    return CellAlignClassMap[align];
  }
};