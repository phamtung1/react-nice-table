import React, { FC } from 'react';
import Icon from './Icon';

type Props = {
  tooltip?: string;
  label?: string;
  icon: string;
  onClick?():void;
}

const Button:FC<Props> = ({tooltip,label,icon, onClick}) => {

  return (
    <div className="NiceTable-Button" title={tooltip || label} onClick={() => onClick && onClick()}>
    <Icon icon={icon} />
    <div className="NiceTable-Button-Label">{label}</div>
    </div>
  );
}

export default Button;