import React from 'react';
import cn from 'classnames';

import './index.css';

import addContactIcon from './content/contact.png';
import addGroupIcon from './content/group.png';

import annaAvatar from './content/anna.png';
import maksimAvatar from './content/maksim.png';

import SearchField from '../SearchField';
import Contacts from '../Contacts';
import Controls from '../Controls';
import Button from '../Button';
import Icon from '../Icon';

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
  const ContactListButton = ({className, icon, title}) => (
    <Button
      className={cn("button_size_small button_theme_blue", {[className]: !!className})}
    >
      <Icon className="icon_size_20 button__icon" src={icon} />
      {title}
    </Button>
  );

  return (
    <aside className={cn("contact-list", {[className]: !!className})}>
      <SearchField
        className="search-field_theme_blue search-field_font-size_10px contact-list__search-field"
      />
      <Contacts
        className="contact-list__contacts"
        contacts={contacts}
      />
      <Controls className="contact-list__controls">
        <ContactListButton
          className="controls__button controls__button_lined_right"
          icon={addContactIcon}
          title="Добавить контакт"
        />
        <ContactListButton
          className="controls__button"
          icon={addGroupIcon}
          title="Группа"
        />
      </Controls>
    </aside>
  )
}

export default ContactList;