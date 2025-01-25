function ArrayRange(min, max) {
    const number = [];

    for (let i = min; i <= max; i++) {
        number.push(i);
    }

    return number;

}


const result = ArrayRange(-10, -4);

console.log(result);



//outptu
// [ -10, -9, -8, -7,-6, -5, -4]