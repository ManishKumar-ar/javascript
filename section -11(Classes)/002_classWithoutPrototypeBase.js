class Circle {
  constructor(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }
}

const c = new Circle(1);

console.log(c);

// output
// Circle { radius: 1, draw: [Function (anonymous)] }