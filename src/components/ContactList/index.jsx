import React from 'react';
import cn from 'classnames';

import './index.css';

import SearchField from '../SearchField';
import Contact from '../Contact';

function ContactList({className, contacts}) {
  return (
    <aside className={cn("contact-list", {[className]: !!className})}>
      <SearchField className="search-field_theme_blue search-field_font-size_10px" />
      {contacts.map((contact) => <Contact {...contact} />)}
    </aside>
  )
}

export default ContactList;