import React, { FC, PropsWithChildren  } from 'react';
import {createUseStyles} from 'react-jss';

import ClassNameHelper from './functions/ClassNameHelper';

const useStyles = createUseStyles({
  headcell: {
    width: (props:any) => props.width
  }
})

type Props = {
  align?: string;
  width?:number;
  sortKey?:string;
  sortOrder?:string;
  onSort?(sortBy:string, sortOrder:string):void;
}

const TableHeadCell:FC<PropsWithChildren<Props>> = ({children, align, width, sortKey, sortOrder, onSort}) => {
  const classes = useStyles({width});
  const alignClass = ClassNameHelper.getCellAlignClass(align);
  
  const handleClickSort = () =>{
    sortKey && onSort && onSort(sortKey, sortOrder === 'asc' ? 'desc' : 'asc');
  }

  const buildSortableContent = () => {
    let arrowicon = undefined;
    if(sortOrder){
      arrowicon = sortOrder === 'desc' ? 'arrow_downward' : 'arrow_upward'
    }

    return <span className='NiceTableSortLabel' onClick={handleClickSort}><i className="material-icons">{arrowicon}</i>{children}</span>
  }

  const content = sortKey ? buildSortableContent() : children;

  return (
    <th className={`${alignClass} ${classes.headcell}`}>
      {content}
    </th>
  );
}

export default TableHeadCell;