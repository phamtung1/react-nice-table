import React from 'react';
import './style.css';

import TableHead from './TableHead';
import TableBody from './TableBody';

export default function NiceTable({ style, columns, data }) {
 
  return (
    <div class="NiceTableContainer">
    <table>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} />
      </table>  
    </div>
  );
}