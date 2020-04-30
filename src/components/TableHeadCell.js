import React from 'react';

export default function TableHeadCell({children}) {
  return (
    <div class="table-cell table-cell--header">
      {children}
    </div>
  );
}