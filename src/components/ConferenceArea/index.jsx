import React from 'react';
import cn from 'classnames';

import './index.css';

import annaImage from './content/anna.png';
import maksimImage from './content/maksim.png';
import meImage from './content/me.png';
import volumeIcon from './content/volume.png';
import cameraIcon from './content/camera.png';
import microIcon from './content/micro.png';

import CallNotice from '../CallNotice';
import Conference from '../Conference';
import Controls from '../Controls';
import Image from '../Image';
import Button from '../Button';
import Icon from '../Icon';

const connections = [{
  id: 1,
  image: annaImage,
  name: "Анна"
}, {
  id: 2,
  image: maksimImage,
  name: "Максим"
}];

function ConferenceArea({className}) {
  return (
    <section className={cn("conference-area", {[className]: !!className})}>
      <CallNotice className="call-notice_lined_bottom conference-area__call-notice" />
      <Conference className="conference-area__conference" connections={connections} />
      <Controls className="conference-area__controls">
        <Button className="controls__button controls__button_fat">
          <Icon className="icon_size_40 button__icon" src={volumeIcon}/>
        </Button>
        <Button className="controls__button controls__button_fat">
          <Icon className="icon_size_40 button__icon" src={cameraIcon}/>
        </Button>
        <Button className="controls__button controls__button_fat">
          <Icon className="icon_size_40 button__icon" src={microIcon}/>
        </Button>
      </Controls>
      <Image className="conference-area__me" src={meImage}/>
    </section>
  )
}

export default ConferenceArea;