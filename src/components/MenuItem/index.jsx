import React from 'react';
import cn from 'classnames';

import './index.css';

import Icon from '../Icon';
import Title from '../Title';

function MenuItem({className, icon, title}) {
  return (
    <div className={cn("menu-item", {[className]: !!className})}>
      <Icon className="icon_size_25 icon_rounded menu-item__icon" src={icon} />
      <Title classNames="title_size_20px menu-item__title">
        {title}
      </Title>
    </div>
  )
}

export default MenuItem;