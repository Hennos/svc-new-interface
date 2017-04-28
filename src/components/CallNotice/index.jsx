import React from 'react';
import cn from 'classnames';

import './index.css';

import agree from './content/agree.png';
import disagree from './content/disagree.png'

import Title from '../Title';
import Controls from '../Controls';
import SimpleButton from '../SimpleButton';

function CallNotice({className}) {
  return (
    <div className={cn("call-notice", {[className]: !!className})}>
      <Title className="title_size_16px call-notice__title">
        Вас вызывает Даниил
      </Title>
      <Controls className="call-notice__controls">
        <SimpleButton className="controls__button controls__button_fat" icon={agree} />
        <SimpleButton className="controls__button controls__button_fat" icon={disagree} />
      </Controls>
    </div>
  )
}

export default CallNotice;