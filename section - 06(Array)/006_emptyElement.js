////0001////// empty the array //////// good but when there is reference to this array then it still store in the memory////////////////

let numbers= [1,2,3,4,5];

numbers=[];

console.log(numbers);


//output
// []















////0002////// empty the array ////// this is the best way//////////////////

// let numbers= [1,2,3,4,5];

// numbers.length=0;

// console.log(numbers);


//output
// []






















// ////0003////// empty the array ////////////////////////

// let numbers= [1,2,3,4,5];

// numbers.splice(0,numbers.length);

// console.log(numbers);


// //output
// // []




















////0004////// empty the array ////////////////////////

// let numbers= [1,2,3,4,5];

// while(numbers.length>0)
//     numbers.pop();

// console.log(numbers);


//output
// []
