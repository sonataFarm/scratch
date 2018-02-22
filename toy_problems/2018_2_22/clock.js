class Clock {

  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    setInterval(this.printTime.bind(this), 1000);
  }

  toString() {
    return [
      this.hours,
      this.minutes,
      this.seconds
    ].map((timeVal) => {
      let printable = timeVal.toString();

      if (printable.length < 2) {
        printable = '0' + printable;
      }

      return printable;
    }).join(':');
  }

  printTime() {
    console.log(this.toString());
  }

  _tick() {
    this.seconds++;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }

    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }

    if (this.hours === 24) {
      this.hours = 0;
    }
  }
}

let c = new Clock();
