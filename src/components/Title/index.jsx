import React from 'react';
import cn from 'classnames';

import './index.css';

function Title({className, children}) {
  return (
    <div className={cn("title", {[className]: className})}>
      {children}
    </div>
  )
}

export default Title;