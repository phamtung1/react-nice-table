import React, { FC, PropsWithChildren  } from 'react';
import ClassNameHelper from '../functions/ClassNameHelper';


type Props = {
  align?: string;
}

const TableHeadCell:FC<PropsWithChildren<Props>> = ({children, align}) => {
  const alignClass = ClassNameHelper.getCellAlignClass(align);
  return (
    <th className={alignClass}>
      {children}
    </th>
  );
}

export default TableHeadCell;