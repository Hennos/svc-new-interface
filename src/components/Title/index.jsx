import React from 'react';
import cn from 'classnames';

import './index.css';

function Title({className, src}) {
  return (
    <div className={cn("title", {[className]: className})}>
      {src}
    </div>
  )
}

export default Title;