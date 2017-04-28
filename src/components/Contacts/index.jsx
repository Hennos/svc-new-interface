import React from 'react';
import cn from 'classnames';

import './index.css';

import Contact from '../Contact';

function Contacts({className, contacts}) {
  return (
    <div className={cn("contacts", {[className]: className})}>
      {contacts.map(({id, ...contact}) => {
        return (
          <Contact
            key={id}
            className="contacts__contact contacts__contact_underlined"
            data={contact}
          />
        )
      })}
    </div>
  )
}

export default Contacts;