import React, { FC, PropsWithChildren  } from 'react';
import {createUseStyles} from 'react-jss';

import ClassNameHelper from '../functions/ClassNameHelper';

type Props = {
  align?: string;
  width?:number;
}

const TableHeadCell:FC<PropsWithChildren<Props>> = ({children, align, width}) => {
  const useStyles = createUseStyles({
    headcell: {
      width: width
    }
  })

  const classes = useStyles();
  const alignClass = ClassNameHelper.getCellAlignClass(align);
  
  return (
    <th className={`${alignClass} ${classes.headcell}`}>
      {children}
    </th>
  );
}

export default TableHeadCell;