class Point {
  constructor(public x: number, private y: number) {

  }
  draw() {
    console.log('X:' + this.x + 'y:' + this.y);

}
get X() {
  return this.x;
}
set Y(value) {
  if (value < 0) {
  throw new Error('value cannot be less than 0.');
  }
  this.x = value;
}

}
let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
