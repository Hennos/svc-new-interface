import React from 'react';
import cn from 'classnames';

import './index.css';

function Image({className, src}) {
  return (
    <img
      className={cn("image", {[className]: !!className})}
      src={src} alt="None"
    />
  )
}

export default Image;