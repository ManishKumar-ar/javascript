///001//////////////////////////// here we have the memory problem

// function Circle(radius)
// {
//     this.radius = radius

//     this.draw = function()
//     {
//         console.log('draw')
//     }
// }

// const c1 = new Circle(10);
// const c2 = new Circle(20);




















/////002 ///////////////solution///////////////////////////////////////


function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {         /// here we add a new function to the prototype
  console.log("draw");
};

const c1 = new Circle(10);


console.log(c1);
console.log(c1.draw());
