//means we add or delete properties from an existing object.

const circle = {
    radius: 1
};

console.log(circle);

circle.color = "red";
circle.draw = function () {
    console.log('hello from function');
}

console.log(circle);


//output
// { radius: 1 }
// { radius: 1, color: 'red', draw: [Function (anonymous)] }