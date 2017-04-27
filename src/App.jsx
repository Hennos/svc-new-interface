import React, { Component } from 'react';

import './App.css';

import Navigation from './components/Navigation';
import ContactList from './components/ContactList';
import ConferenceArea from './components/ConferenceArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation className="navigation_underlined App__navigation" />
        <ContactList className="contact-list_lined_right App__contact-list" />
        <ConferenceArea className="App__conference-area" />
      </div>
    );
  }
}

export default App;
