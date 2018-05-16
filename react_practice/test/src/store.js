import { ENTRIES } from './data';
import { observable } from 'mobx';
import Entry from './util/entry';
import { computed, action } from 'mobx';

const entries = ENTRIES.map(entry => new Entry(entry.date, entry.title, entry.body)).sort((entryA, entryB) => entryB.date - entryA.date);

class Store {
  @observable entries = entries;
  @observable entryIdx = 0;

  @computed get currentEntry() {
    return this.entries[this.entryIdx];
  }

  @action viewNextEntry() {
    if (this.entryIdx > 0) this.entryIdx--;
  }

  @action viewPrevEntry() {
    if (this.entryIdx < this.entries.length - 1) this.entryIdx++;
  }
};

const store = new Store();

export default store;
window.store = store;
