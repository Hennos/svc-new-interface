import React from 'react';
import cn from 'classnames';

import './index.css';

function Content({className, children}) {
  return (
    <div className={cn("content", {[className]: !!className})}>
      {children}
    </div>
  )
}

export default Content;