import React, { Component } from 'react';

import Navigation from './components/Navigation';
import ConferenceArea from './components/ConferenceArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation className="navigation_underlined"/>
        <ConferenceArea />
      </div>
    );
  }
}

export default App;
