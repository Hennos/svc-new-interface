import React from 'react';
import cn from 'classnames';

import './index.css';

function List({className, body}) {
  return (
    <ul className={cn("list", {[className]: !!className})}>
      {body.map((item, i) => <li key={i} className="list__item">{item}</li>)}
    </ul>
  )
}

export default List;