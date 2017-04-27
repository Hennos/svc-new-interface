import React from 'react';
import cn from 'classnames';

import './index.css';

function ContactName({className}) {
  return (
    <div className={cn({[className]: !!className})}>

    </div>
  )
}

export default ContactName;