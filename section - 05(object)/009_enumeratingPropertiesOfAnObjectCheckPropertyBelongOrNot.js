const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


if ('radius' in circle) {
    console.log('circle has radius')
}

//output
// circle has radius