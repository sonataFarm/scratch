import React from 'react';
import { ENTRIES } from '../../data';
import Entry from '../../util/entry';
import EntryComponent from './Entry';
import App from './App';

class AppContainer {
  constructor() {
    this.entries = ENTRIES.map(entry => new Entry(entry.date, entry.title, entry.body)).sort((entryA, entryB) => EntryB.date - entryA.date);

    this.state = {
      currentEntry: 0;
    }
  }

  prevEntry = () => {};
  nextEntry = () => {};
  goToEntry = () => {};

  render() {
    return <div>
      <App entries={entries} currentEntry={currentEntry}/>
    </div>
  }
}
