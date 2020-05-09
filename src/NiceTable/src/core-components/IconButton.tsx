import React, { FC } from 'react';
import Icon from './Icon';

type Props = {
  tooltip?: string;
  icon: string;
  onClick?():void;
}

const IconButton:FC<Props> = ({tooltip,icon, onClick}) => {

  return (
    <div className="NiceTable-Button NiceTable-Button-Icon" title={tooltip} onClick={() => onClick && onClick()}>
    <Icon icon={icon} />
    </div>
  );
}

export default IconButton;