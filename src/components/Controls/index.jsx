import React from 'react';
import cn from 'classnames';

import './index.css';

function Controls({className, children}) {
  return (
    <div className={cn("controls", {[className]: className})}>
      {children}
    </div>
  )
}

export default Controls;