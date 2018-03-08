import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton.jsx';
import Mailbox from './Mailbox';

class App extends Component {

  messages = [];

  render() {
    return (
      <div className="App">
        <ToggleButton initialStatus="WHA??" />
        <Mailbox messages={this.messages} />
      </div>
    );
  }
}

export default App;
