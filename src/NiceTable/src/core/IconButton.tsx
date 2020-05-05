import React, { FC } from 'react';

type Props = {
  tooltip?: string;
  label?: string;
  icon: string;
  onClick?():void;
}

const IconButton:FC<Props> = ({tooltip,label,icon, onClick}) => {

  return (
    <div className="NiceTable-IconButton" title={tooltip || label} onClick={() => onClick && onClick()}>
    <i className="material-icons">{icon}</i>
    <div className="NiceTable-IconButton-Label">{label}</div>
    </div>
  );
}

export default IconButton;