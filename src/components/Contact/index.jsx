import React from 'react';
import cn from 'classnames';

import './index.css';

import Image from '../Image';

function Contact({className, data}) {
  return (
    <div className={cn("contact", {[className]: !!className})}>
      <Image
        className="image_rounded"
        src={data.image}
      />
    </div>
  )
}
export default Contact;