import React, { FC } from 'react';

type Props = {
  icon: string;
}

const Icon:FC<Props> = ({icon}) => {

  return (
    <i className="material-icons">{icon}</i>
  );
}

export default Icon;