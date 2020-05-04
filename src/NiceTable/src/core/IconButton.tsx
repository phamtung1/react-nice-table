import React, { FC } from 'react';
// import { ReactComponent as SaveIcon } from '../assets/save.svg';
// import { ReactComponent as DownloadIcon } from '../assets/download.svg';

type Props = {
  tooltip?: string;
  label?: string;
  icon: string;
  onClick?():void;
}

const IconButton:FC<Props> = ({tooltip,label,icon, onClick}) => {
  
  //  const IconComponent = icon === 'save' ? SaveIcon : DownloadIcon;

  return (
    <div className="NiceTable-IconButton" title={tooltip || label} onClick={() => onClick && onClick()}>
    {/* <IconComponent className="NiceTable-IconButton-Svg" /> */}
    <div className="NiceTable-IconButton-Label">{label}</div>
    </div>
  );
}

export default IconButton;