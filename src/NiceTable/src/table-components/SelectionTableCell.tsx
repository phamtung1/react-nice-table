import React, { FC  } from 'react';
import ClassNameHelper from '../functions/ClassNameHelper';
import IconButton from '../core-components/IconButton';

type Props = {
  
}

const SelectionTableCell:FC<Props> = () => {
  const alignClass = ClassNameHelper.getCellAlignClass('center');
  return (
    <td className={`NiceTableCell-noPadding ${alignClass}`} style={{width:'30px'}}><IconButton icon="check_box_outline_blank"/></td>
  );
}

export default SelectionTableCell;