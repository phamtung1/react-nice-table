import React, { FC } from 'react';
import Icon from './Icon';

type Props = {
  tooltip?: string;
  icon: string;
  onClick?():void;
  disabled?:boolean;
  color?:string;
}

const IconButton:FC<Props> = ({tooltip,icon, onClick, disabled = false, color}) => {

  const handleClick = () => {
    if(!disabled){
      onClick && onClick();
    }
  }

  return (
    <div className={`NiceTable-Button NiceTable-Button-Icon ${disabled ? 'disabled' : ''}`} style={{color:(disabled ? '' : color)}} title={tooltip} onClick={handleClick}>
    <Icon icon={icon} />
    </div>
  );
}

export default IconButton;