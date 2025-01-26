//0001///dynamic nature of function in javascript///////////////


// function sum(a,b){
//     return a + b;
// }

// const result  = sum(1,2);
// const result2  = sum(1,2,3,4,5);

// console.log(result);
// console.log(result2);

// //output
// // 3
// // 3




























///002//if we pass less then by default is become undefine
// a + undefine = undefine

function sum(a,b){
    return a + b;
}

const result  = sum(1,2);
const result2  = sum(1);  //pass only one argument

console.log(result);
console.log(result2);

//output
// 3
// NaN



