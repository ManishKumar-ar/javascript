const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


for (let key in circle) {

    if(typeof circle[key]!== 'function')
    console.log(key, circle[key]); 
}


//output
// radius 1