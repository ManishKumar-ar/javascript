function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(len) {
  this.len = len;
}

// Correct inheritance from Shape
Circle.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);

const c = new Circle(1);
const sq = new Square(10);

for (let key in c) console.log(key);

for (let key in sq) console.log(key);


//output
// radius
// duplicate
// len
// duplicate