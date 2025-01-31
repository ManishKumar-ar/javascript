const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


const result = Object.keys(circle)    // here we want to return all the key property
console.log(result);

//output
// [ 'radius', 'draw' ]