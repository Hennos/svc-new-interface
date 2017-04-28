import React from 'react';
import cn from 'classnames';

import './index.css';

import ConnectionInfo from '../ConnectionInfo';

function Connection({className, name, ...props}) {
  return (
    <div className={cn("connection", {[className]: className})}>
      <img  className="connection__image" src={props.image} alt="None" />
      <ConnectionInfo className="connection__info connection__info_theme_blue" name={name}>

      </ConnectionInfo>
    </div>
  )
}

export default Connection;