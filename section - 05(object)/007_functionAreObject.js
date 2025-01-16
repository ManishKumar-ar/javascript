//here we create an constructor function to create object

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);


console.log(Circle.name)         //name of the function
console.log(Circle.length);    //number of argument
console.log(Circle.constructor)   // who create Circle constructor

//output
// Circle
// 1
// [Function: Function]



Circle.call({},1,2,3)


