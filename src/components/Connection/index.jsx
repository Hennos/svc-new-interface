import React from 'react';
import cn from 'classnames';

import './index.css';

import About from '../About';

function Connection({className, ...props}) {
  return (
    <figure className={cn("connection", {[className]: className})}>
      <img src={props.image} alt="None" />
      <figcaption className="connection__name connection__name_theme_blue connection__name_size_10px">
        {props.name}
      </figcaption>
      <About className="">

      </About>
    </figure>
  )
}

export default Connection;