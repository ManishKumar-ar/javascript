//here we create an constructor function to create object

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);


console.log(another.constructor)

//output
// [Function: Circle]