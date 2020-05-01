import React from 'react';
import ClassNameHelper from '../functions/ClassNameHelper';

export default function TableCell({children, align}) {
  const alignClass = ClassNameHelper.getCellAlignClass(align);
  return (
      <td className={alignClass}>
        {children}
      </td>
  );
}