import React, { FC, PropsWithChildren  } from 'react';
import {createUseStyles} from 'react-jss';

import ClassNameHelper from '../functions/ClassNameHelper';

const useStyles = createUseStyles({
  headcell: {
    width: (props:any) => props.width
  }
})

type Props = {
  align?: string;
  width?:number;
}

const TableHeadCell:FC<PropsWithChildren<Props>> = ({children, align, width}) => {
  const classes = useStyles({width});
  const alignClass = ClassNameHelper.getCellAlignClass(align);
  
  return (
    <th className={`${alignClass} ${classes.headcell}`}>
      {children}
    </th>
  );
}

export default TableHeadCell;