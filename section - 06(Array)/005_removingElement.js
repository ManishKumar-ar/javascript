///001//////// remove from last////////////////pop()//////////////////////////////////

// const numbers = [1,2,3,4,5];

// const result = numbers.pop()

// console.log(`remove number is ${result}`);
// console.log(numbers);


//output
// remove number is 5
// [ 1, 2, 3, 4 ]

















// ///002//////// remove from beginning////////////shift()//////////////////////////////////////

// const numbers = [1,2,3,4,5];

// const result = numbers.shift()

// console.log(`remove number is ${result}`);
// console.log(numbers);


// // output
// // remove number is 1
// // [ 2, 3, 4, 5 ]



























///003//////// remove from middle//////////////////////////////////////////////////
// spice(indexFromWhereRemove, howManyRemove)

const numbers = [10,20,30,40,50];

const result = numbers.splice(2,1)

console.log(`remove number is ${result}`);
console.log(numbers);


// output
// remove number is 30
// [ 10, 20, 40, 50 ]