import React from 'react';
import cn from 'classnames';

import './index.css';

function About({className, children}) {
  return (
    <div className={cn("about", {[className]: !!className})}>
      {children}
    </div>
  )
}

export default About;