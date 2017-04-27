import React from 'react';
import cn from 'classnames';

import './index.css';

import annaAvatar from './content/anna.png';
import maksimAvatar from './content/maksim.png';

import SearchField from '../SearchField';
import Contact from '../Contact';

const contacts = [{
  id: 1,
  image: annaAvatar,
  name: "Анна",
  age: "28 лет",
  info: {
    city: "Санкт-Петербург",
    email: "ann@yandex.ru"
  }
}, {
  id: 2,
  image: maksimAvatar,
  name: "Максим",
  age: "27 лет",
  info: {
    city: "Москва",
    email: "maks@gmail.com"
  }
}, {
  id: 3,
  name: "Владислав",
  age: "20 лет",
  info: {
    city: "Калининград",
    email: "v-kalin@mail.ru"
  }
}, {
  id: 4,
  name: "Петр",
  age: "36 лет",
  info: {
    city: "Самара",
    email: "petrVR@spi.ru"
  }
}, {
  id: 5,
  name: "Дмитрий",
  age: "16 лет",
  info: {
    city: "Москва",
    email: "dimas-m@yandex.ru"
  }
}, {
  id: 6,
  name: "Марина",
  age: "25 лет",
  info: {
    city: "Сургут",
    email: "marisha.a.s@mail.ru"
  }
}, {
  id: 7,
  name: "Евгения",
  age: "28 лет",
  info: {
    city: "Москва",
    email: "jane-s.i.@yandex.ru"
  }
}];

function ContactList({className}) {
  return (
    <aside className={cn("contact-list", {[className]: !!className})}>
      <SearchField
        className="search-field_theme_blue search-field_font-size_10px contact-list__search-field"
      />
      {contacts.map(({id, ...contact}) => {
        return (
          <Contact
            key={id}
            className="contact-list__contact contact-list__contact_underlined"
            data={contact}
          />
        )
      })}
    </aside>
  )
}

export default ContactList;