import React, { FC } from 'react';
import './style.css';

import TableHead from './TableHead';
import TableBody from './TableBody';

type Props = {
  columns: any[];
  data: any[];
}

const NiceTable: FC<Props> = ({columns, data}) => {
  return (
    <div className="NiceTableContainer">
    <table>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} />
      </table>  
    </div>
  );
}

export default NiceTable;