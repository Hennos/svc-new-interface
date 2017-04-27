import React from 'react';
import cn from 'classnames';

import './index.css';

function ConferenceArea({className}) {
  return (
    <section className={cn("conference-area", {[className]: !!className})}>
    </section>
  )
}

export default ConferenceArea;