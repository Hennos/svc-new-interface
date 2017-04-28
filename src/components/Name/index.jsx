import React from 'react';
import cn from 'classnames';

import './index.css';

function Name({className, name, children}) {
  return (
    <div className={cn("name", {[className]: className})}>
      <p>{name}</p>
      {children}
    </div>
  )
}

export default Name;