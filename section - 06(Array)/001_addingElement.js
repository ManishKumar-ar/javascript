// 001//here we want to add the number in the last of the array
// const number = [3,4];

// number.push(1,2); 

// console.log(number)

//output
// [ 3, 4, 1, 2 ]











// 002//here we want to add the number in the beginning of the array

// const number = [3,4];

// number.unshift(1,2); 

// console.log(number)

//output
// [ 1, 2, 3, 4 ]















// 003//here we want to add the number in the middle of the array

//splice(starting_position,numberOfElementThatWantToDelete,itemsThatWeAdd)
const number = [3,4,5,6];

number.splice(2,0,'a','b',10); 

console.log(number)

//output
// [
//     3,  4, 'a', 'b',
//     10, 5, 6
//   ]

//note  - 
// The output of your code appears on multiple lines in the console because console.log formats arrays for readability when they are too long to fit on a single line.
//  This behavior is common in environments like Node.js or browser developer tools.




