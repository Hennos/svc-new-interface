import React from 'react';
import cn from 'classnames';

import './index.css';

import Title from '../Title';

function Header({className, title, children}) {
  return (
    <div className={cn("header", {[className]: !!className})}>
      <Title className="title_size_14px header__title">
        {title}
      </Title>
      {children}
    </div>
  )
}

export default Header ;