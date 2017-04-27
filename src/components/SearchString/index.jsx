import React from 'react';
import cn from 'classnames';

import './index.css';

import searchIcon from './content/search.png';

import Icon from '../Icon';
import Input from '../Input';

function SearchString({className}) {
  return (
    <div className={cn("search-string", {[className]: !!className})}>
      <Icon className="icon_size_20 search-string__icon" src={searchIcon} />
      <Input className="input_theme_blue search-string__input" />
    </div>
  )
}

export default SearchString;