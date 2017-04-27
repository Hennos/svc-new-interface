import React from 'react';
import cn from 'classnames';

import './index.css';

function Input({className, placeholder}) {
  return (
    <input
      className={cn("input", {[className]: !!className})}
      placeholder={placeholder}
    />
  )
}

export default Input;