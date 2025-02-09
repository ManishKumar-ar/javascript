function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

console.log(Object.keys(c1));

//if we iterate then it return all property  - own object + prototype also
for (let key in c1) console.log(key);

//output
// [ 'radius', 'move' ]
// radius
// move
// draw
