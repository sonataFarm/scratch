class SquareClass {
  static id = 0;
  constructor(centerX, centerY, length = 10) {
    this.id = this.constructor.id++;
    this.length = length;
    this.centerX = centerX;
    this.centerY = centerY;
  }

  get top() {
    return this.centerY - Math.floor(this.length / 2);
  }

  get left() {
    return this.centerX - Math.floor(this.length / 2);
  }

  resize() {
    this.length *= 2;
  }
}

window.SquareClass = SquareClass;
export default SquareClass;
