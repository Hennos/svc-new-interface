import React from 'react';
import cn from 'classnames';

import './index.css';

import visibleIcon from './content/visible.png';

import Header from '../Header';
import Icon from '../Icon';
import Content from '../Content';
import ContentItem from '../ContentItem';
import List from '../List';

function ConnectionInfo({className, name, data}) {
  return (
    <div className={cn("connection-info", {[className]: !!className})}>
      <Header className="connection-info__name" title={name}>
        <Icon className="icon_size_16" src={visibleIcon}/>
      </Header>
      <Content className="connection-info__content">
        <ContentItem className="content__item" title="Состояние:" >
          <List body={data.state}/>
        </ContentItem>
        <ContentItem className="content__item" title="Эмоции:">
          <List body={data.emotions}/>
        </ContentItem>
        <ContentItem className="content__item" title="Передаваемая информация:">
          {(data.truth) ? "Истинна" : "Ложна"}
        </ContentItem>
      </Content>
    </div>
  )
}

export default ConnectionInfo;