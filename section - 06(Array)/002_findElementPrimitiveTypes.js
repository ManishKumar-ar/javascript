// /////001//// indexOf()///////////////////////////////////////

// const number = [1,2,3,4];

// const result = number.indexOf('a')  // return -1 if the search element not in the array
// const result2 = number.indexOf(4)  // return the index if the search element  in the array


// console.log(result);
// console.log(result2);



// //ouput
// // -1
// // 3








// /////002//// lastIndexOf()///////////////////////////////////////

// const number = [1,2,3,4,1,2];

// const result = number.lastIndexOf(1)  


// console.log(result);


// //ouput
// // 4
















/////003//// checking element in the array or not///////////////////////////////////////

// const number = [1,2,3,4,1,2];

// const result = number.indexOf(2)!== -1

// if(result)
//     console.log(`element is present in the array`)
// else
// console.log('element is not present in array');



//ouput
// element is present in the array




















/////004//// checking element in the array or not - alternate method///////////////////////////////////////

// const number = [1,2,3,4,1,2];

// const result = number.includes(3);

// if(result)
//     console.log(`element is present in the array`)
// else
// console.log('element is not present in array');



//ouput
// element is present in the array



















// /////005//// indexOf()///////////////////////////////////////

const number = [1,20,30,4,1,20,30];

const result = number.indexOf(1)  
const result2 = number.indexOf(1,2);
 //here the second argument is shown -from where we want to search start

console.log(result);
console.log(result2);



//ouput
//0
// 4 

