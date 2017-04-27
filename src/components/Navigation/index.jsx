import React from 'react';
import cn from 'classnames';

import './index.css';

import analysisIcon from './content/analys.png';
import settingsIcon from './content/settings.png';

import Title from '../Title';
import Menu from '../Menu';
import MenuItem from '../MenuItem';

function Navigation({className}) {
  return (
    <nav className={cn("navigation", {[className]: !!className})}>
      <Title
        className="title_italic title_size_20px navigation__title"
        src="Несколько более честная видеоконференцсвязь"
      />
      <Menu className="navigation__menu">
        <MenuItem
          className="menu-item_theme_blue menu__element"
          icon={analysisIcon}
          title="Анализ"
        />
        <MenuItem
          className="menu-item_theme_blue menu__element"
          icon={settingsIcon}
          title="Настройки"
        />
      </Menu>
    </nav>
  )
}

export default Navigation;