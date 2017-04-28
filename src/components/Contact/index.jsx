import React from 'react';
import cn from 'classnames';

import './index.css';

import noneAvatar from './content/default.png';

import Image from '../Image';
import Name from '../Name';
import About from '../About';

function Contact({className, data, focused}) {
  return (
    <div className={cn("contact", {[className]: !!className})}>
      <Image className="image_size_small image_rounded contact__avatar" src={data.image || noneAvatar} />
      <Name className="name_size_default contact__name" name={data.name}>
        <About className="about_size_small">{data.age}</About>
      </Name>
      <About className="about_align_right about_size_small contact__data">
        <p>{data.info.city}</p>
        <p>{data.info.email}</p>
      </About>
    </div>
  )
}
export default Contact;