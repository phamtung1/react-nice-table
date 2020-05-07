import React, { FC, PropsWithChildren } from 'react';

type Props = {
  
}

const TableFooter:FC<PropsWithChildren<Props>> = ({children}) => {
  
  return (
    <div className="NiceTable-Footer">
        {children}
      </div>
  );
}

export default TableFooter;