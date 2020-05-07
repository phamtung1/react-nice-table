import React, { FC, PropsWithChildren  } from 'react';
import ClassNameHelper from '../functions/ClassNameHelper';

type Props = {
  align?:string;
}

const TableCell:FC<PropsWithChildren<Props>> = ({children, align}) => {
  const alignClass = ClassNameHelper.getCellAlignClass(align);
  return (
      <td className={alignClass}>
        {children}
      </td>
  );
}

export default TableCell;