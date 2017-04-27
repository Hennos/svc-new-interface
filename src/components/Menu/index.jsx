import React from 'react';
import cn from 'classnames';

import './index.css';

function Menu({className, children}) {
  return (
    <div className={cn("menu", {[className]: !!className})}>
      {children}
    </div>
  )
}

export default Menu;