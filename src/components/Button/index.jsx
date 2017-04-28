import React from 'react';
import cn from 'classnames';

import './index.css';

function Button({className, children}) {
  return (
    <div className={cn("button", {[className]: className})}>
      {children}
    </div>
  )
}

export default Button;