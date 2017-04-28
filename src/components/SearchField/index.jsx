import React from 'react';
import cn from 'classnames';

import './index.css';

import SearchString from '../SearchString';

function SearchField({className}) {
  return (
    <div className={cn("search-field", {[className]: !!className})}>
      <SearchString
        className="search-string_lined_bottom search-string_theme_blue search-field__string"
      />
    </div>
  )
}

export default SearchField;