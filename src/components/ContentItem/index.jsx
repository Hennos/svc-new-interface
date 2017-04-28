import React from 'react';
import cn from 'classnames';

import './index.css';

import Title from '../Title';

function ContentItem({className, title, children}) {
  return (
    <div className={cn("content-item", {[className]: !!className})}>
      <Title className="title_size_14px title_color_black content-item__title">{title}</Title>
      <div className="content-item__body_size_small content-item__body">{children}</div>
    </div>
  )
}

export default ContentItem;