import React from 'react';
import ClassNameHelper from '../functions/ClassNameHelper';

export default function TableHeadCell({children, align}) {
  const alignClass = ClassNameHelper.getCellAlignClass(align);
  return (
    <th className={alignClass}>
      {children}
    </th>
  );
}