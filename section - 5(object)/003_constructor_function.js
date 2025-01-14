// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw from constructor');
    };
}

// Create a new instance of Circle
const circle = new Circle(1);

// Log the radius of the circle
console.log('Radius:', circle.radius);

// Call the draw method
circle.draw();


/////////////////////////////////////////////output///////
// Radius: 1
// draw from constructor