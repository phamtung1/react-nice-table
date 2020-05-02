import React, { FC } from 'react';
import { ReactComponent as SaveIcon } from '../../assets/save.svg';

type Props = {
  tooltip?: string;
  label?: string;
  onClick?():void;
}

const IconButton:FC<Props> = ({tooltip,label, onClick}) => {
  
  return (
    <div className="NiceTable-IconButton" title={tooltip || label} onClick={() => onClick && onClick()}>
    <SaveIcon className="NiceTable-IconButton-Svg" />
    <div className="NiceTable-IconButton-Label">{label}</div>
    </div>
  );
}

export default IconButton;