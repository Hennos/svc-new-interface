import React from 'react';
import cn from 'classnames';

import './index.css';

function Input({className}) {
  return (
    <input className={cn("input", {[className]: !!className})} />
  )
}

export default Input;