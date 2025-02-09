function Circle(radius) {
  this.radius = radius;
}

/// here we add a new function to the prototype
Circle.prototype.toString = function () {
  return "radius of the cirle is :" + this.radius;
};

const c1 = new Circle(10);

console.log(c1);
console.log(c1.toString());

//output
// Circle { radius: 10 }
// radius of the cirle is :10
