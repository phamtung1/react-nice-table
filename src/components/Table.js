import React from 'react';
import './style.css';

import TableCell from './TableCell';
import TableHeadCell from './TableHeadCell';
import TableColumn from './TableColumn';

export default function Table({ style, columns, data }) {
 
  return (
    <div class="table-container">
    <table border="1">
      <thead>
        <tr>
        {columns.map((column) => {
          return (
            <TableHeadCell>{column.title}</TableHeadCell> 
            );
        })}
        </tr>
      </thead>
      <tbody>
          {data.map((item) => {
            return (
             <tr>
               {columns.map((column) => {
                return (
                  <TableCell>{item[column.field]}</TableCell>          
                );
               })}
              </tr>);
            })}
        </tbody>
      </table>  
    </div>
  );
}