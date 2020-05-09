import React, { FC  } from 'react';
import ClassNameHelper from '../functions/ClassNameHelper';
import IconButton from '../core-components/IconButton';
import {CheckedState} from '../types/Enum';

type Props = {
  checkedState?:CheckedState;
  onChange?(rowDataId:any, newState: CheckedState):void;
  rowDataId?:any;
}

const SelectionTableCell:FC<Props> = ({checkedState, onChange, rowDataId}) => {
  const alignClass = ClassNameHelper.getCellAlignClass('center');
  const icon = checkedState === CheckedState.Checked ?  'check_box' : (checkedState === CheckedState.Indeterminate ? 'indeterminate_check_box' : 'check_box_outline_blank');
  const handleOnChange = () => {
    if(onChange){
      const newState = checkedState === CheckedState.Checked ? CheckedState.Unchecked : CheckedState.Checked;
      onChange(rowDataId, newState);
    }
  }
  return (
    <td className={`NiceTableCell-noPadding ${alignClass}`} style={{width:'35px'}}><IconButton icon={icon} onClick={handleOnChange}/></td>
  );
}

export default SelectionTableCell;