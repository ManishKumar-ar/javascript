function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

console.log(Object.keys(c1));


//output
// [ 'radius', 'move' ]