import React from 'react';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

function SimpleButton({className, icon}) {
  return (
    <Button className={cn({[className]: !!className})}>
      <Icon className="icon_size_25 button__icon" src={icon}/>
    </Button>
  )
}

export default SimpleButton;