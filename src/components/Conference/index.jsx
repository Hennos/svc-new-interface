import React from 'react';
import cn from 'classnames';

import './index.css';

import Connection from '../Connection';

function Conference({className, connections}) {
  return (
    <div className={cn("conference", {[className]: !!className})}>
      {connections.map((connection) => {
        return (
          <Connection
            key={connection.id}
            className="conference__connection"
            {...connection}
          />
        )
      })}
    </div>
  )
}

export default Conference;