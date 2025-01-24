
//001///// using the filter() //////////////////////////////////////////////////////

// const numbers  = [ 1,2,3,-1,-5,10];

// const result  = numbers.filter(function(value){
//     return value >=0;
// })


// console.log(result);


// //output
// // [ 1, 2, 3, 10 ]


























///002/////////using the arrow in filter() /////////////////

const numbers = [1, 2, 3, -1, -5, 10];

const result = numbers.filter((value) => value >= 0)


console.log(result);


//output
// [ 1, 2, 3, 10 ]