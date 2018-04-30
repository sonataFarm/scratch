export default class Entry {
  static id = 1;
  constructor(date, title, body) {
    this.date = date;
    this.title = title;
    this.body = body;
    this.id = this.constructor.id++;
  }
}
