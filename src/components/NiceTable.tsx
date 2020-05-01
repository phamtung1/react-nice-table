import React, { FC } from 'react';
import './style.scss';

import ColumnModel from '../types/ColumnModel';
import TableHead from './TableHead';
import TableBody from './TableBody';

type Props = {
  columns: ColumnModel[];
  data: any[];
}

const NiceTable: FC<Props> = ({columns, data}) => {
  return (
    <div className="NiceTableRoot">
    <div className="NiceTableContainer">
    <table>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} />
      </table>  
    </div>
    <div className="NiceTable-Pagination">
      <div  className="NiceTable-Pagination-Text">Rows per page:</div>
      <select className="NiceTable-Pagination-Select">
        <option>5</option>
        <option>10</option>
        <option>25</option>
      </select>
      <div>
    <a href="#">❮</a>
    <a href="#">❯</a>
    </div>
  </div>
  </div>
  );
}

export default NiceTable;