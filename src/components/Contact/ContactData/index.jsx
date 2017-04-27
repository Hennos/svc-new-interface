import React from 'react';
import cn from 'classnames';

import './index.css';

function ContactData({className}) {
  return (
    <div className={cn({[className]: !!className})}>

    </div>
  )
}

export default ContactData;