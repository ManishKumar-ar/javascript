class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(1);

console.log(c)



// output
// Circle { radius: 1 }