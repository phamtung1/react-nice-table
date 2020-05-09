import React, { FC  } from 'react';
import ClassNameHelper from '../functions/ClassNameHelper';
import IconButton from '../core-components/IconButton';
import {CheckedState} from '../types/Enum';

type Props = {
  checkedState?:CheckedState;
  onChange?(rowDataId:any, newState: CheckedState):void;
  rowDataId?:any;
  hideCheckbox?:boolean;
}

const SelectionTableCell:FC<Props> = ({checkedState, onChange, rowDataId, hideCheckbox}) => {
  const alignClass = ClassNameHelper.getCellAlignClass('center');
  
  const handleOnChange = () => {
    if(onChange){
      const newState = checkedState === CheckedState.Checked ? CheckedState.Unchecked : CheckedState.Checked;
      onChange(rowDataId, newState);
    }
  }

  let icon = null;
  if(!hideCheckbox){
    const iconKey = checkedState === CheckedState.Checked ?  'check_box' : (checkedState === CheckedState.Indeterminate ? 'indeterminate_check_box' : 'check_box_outline_blank');
    icon = <IconButton icon={iconKey} onClick={handleOnChange}/>;
  }

  return (
    <td className={`NiceTableCell-noPadding ${alignClass}`} style={{width:'35px'}}>{icon}</td>
  );
}

export default SelectionTableCell;