import React from 'react';
import cn from 'classnames';

import './index.css';

function Icon({className, src}) {
  return (
    <img
      className={cn("icon", {[className]: className})}
      src={src} alt={"None"}
    />
  )
}

export default Icon;