function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(5);

console.log(circle.constructor);            
console.log(circle.constructor === Object); 

//output
// [Function: Object]
// true