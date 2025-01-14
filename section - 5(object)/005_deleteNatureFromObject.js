//means we add or delete properties from an existing object.

const circle = {
    radius: 1
};

console.log(circle);              /// before anything add

circle.color = "red";              ///add color
circle.draw = function () {        //add function
    console.log('hello from function');
}

console.log(circle);              //before delete
delete circle.radius;              //delete radius
console.log(circle);               //after delete


//output
// { radius: 1 }
// { radius: 1, color: 'red', draw: [Function (anonymous)] }
// { color: 'red', draw: [Function (anonymous)] }