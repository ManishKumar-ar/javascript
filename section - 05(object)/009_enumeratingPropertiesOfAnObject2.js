const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// //Using `for...in` to iterate over all enumerable properties

for (let key in circle) {
    console.log(key, circle[key]); // Outputs keys and their values
}


//output
// radius 1
// draw [Function: draw]