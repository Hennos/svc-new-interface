import React from 'react';
import cn from 'classnames';

import './index.css';

import CallNotice from '../CallNotice';

function ConferenceArea({className}) {
  return (
    <section className={cn("conference-area", {[className]: !!className})}>
      <CallNotice className="call-notice_lined_bottom"/>
    </section>
  )
}

export default ConferenceArea;