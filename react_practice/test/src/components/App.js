import React, { Component } from 'react';
import './App.css';
import Entry from './Entry/Entry';

class App extends Component {
  render() {
    return (
      <div>
        <Entry entry={this.props.currentEntry} />
      </div>
    );
  }
}

export default App;
