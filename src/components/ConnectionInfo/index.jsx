import React from 'react';
import cn from 'classnames';

import './index.css';

import Name from '../Name';

function ConnectionInfo({className, name}) {
  return (
    <div className={cn("connection-info", {[className]: !!className})}>
      <Name className="name_size_default connection-info__name" name={name} />
    </div>
  )
}

export default ConnectionInfo;