////////001/////// wrong way to find in the refernce type ///////////////

// const courses = [
//     {id:1,name:'a'},
//     {id:2,name:'b'}
// ]

// const result = courses.indexOf({id:1,name:'a'})     // return -1, still we have the same course in the array
// console.log(result);

//output

// -1


















// ////////002/////// correct way to find in the refernce type - using the find()  ///////////////

// const courses = [
//     {id:1,name:'a'},
//     {id:2,name:'b'}
// ]

// const result = courses.find(function(element){
//     return element.name === 'a';
// })   
// console.log(result);

// //output
// // { id: 1, name: 'a' }















////////002/////// correct way to find in the refernce type - using the find()  ///////////////

// const courses = [
//     {id:1,name:'a'},
//     {id:2,name:'b'}
// ]

// const result = courses.find(function(element){
//     return element.name === 'xxxxxxxxxxxx';
// })   
// console.log(result);

//output
// undefined



















////////003/////// findIndex()  ///////////////

const courses = [
    {id:1,name:'a'},
    {id:2,name:'b'},
    {id:3,name:'c'},
    {id:4,name:'d'}
]

const result = courses.findIndex(function(element){
    return element.name === 'b';
})   
console.log(result);

//output
// 1
