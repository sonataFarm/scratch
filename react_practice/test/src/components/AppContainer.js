import React from 'react';
import { observer } from 'mobx-react';
import { ENTRIES } from '../data';
import Entry from '../util/entry';
import EntryComponent from './Entry/Entry';
import App from './App';
import store from '../store';

@observer export default class AppContainer extends React.Component {
  render() {
    return <div>
      <EntryComponent entry={store.currentEntry} />
      <App
        entries={store.entries}
        currentEntry={store.currentEntry}
        viewPrevEntry={store.viewPrevEntry}
        viewNextEntry={store.viewNextEntry}
      />
    </div>
  }
}
