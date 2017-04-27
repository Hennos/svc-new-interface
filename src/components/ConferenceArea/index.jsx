import React from 'react';
import cn from 'classnames';

import './index.css';

import ContactList from '../ContactList';

function ConferenceArea({className}) {
  return (
    <main className={cn("conference-area", {[className]: !!className})}>
      <ContactList className="contact-list_lined_right" contacts={[]}/>
    </main>
  )
}

export default ConferenceArea;