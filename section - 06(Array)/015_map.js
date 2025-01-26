////001/// here we have simple map function that join elements with array /////////////

// const numbers = [1, 2, 3, -1, -5, 10];

// const result = numbers.map((value) => '<li>' + value + '</li>')


// console.log(result);


//output
// [
//     '<li>1</li>',
//     '<li>2</li>',
//     '<li>3</li>',
//     '<li>-1</li>',
//     '<li>-5</li>',
//     '<li>10</li>'
// ]






















//002 // map the object with array ////////////////////////////////////////////////////////////////

// const filtered = [1,  2, 3];

// // Map the filtered numbers to an array of objects
// const items = filtered.map(n => {
//   const obj = { value: n };
//   return obj;
// });

// console.log(items);


//output
// [ { value: 1 }, { value: 2 }, { value: 3 } ]














// //003 // map the object with array ////////////////////////////////////////////////////////////////

// const filtered = [1,  2, 3];

// // Map the filtered numbers to an array of objects
// const items = filtered.map(n => {
//   return { value: n };

// });

// console.log(items);


// //output
// // [ { value: 1 }, { value: 2 }, { value: 3 } ]





























//004 // map the object with array ////////////////////////////////////////////////////////////////

// const filtered = [1,  2, 3];

// // Map the filtered numbers to an array of objects
// const items = filtered.map(n =>  {value: n }

// );

// console.log(items);


//output
// [ { value: 1 }, { value: 2 }, { value: 3 } ]
















//practice some  to map one property only from an object ////////////////////////////////////////////

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];


// const result  = movies.map((element)=>
//     element.rating,

// )


// console.log(result)


//output
// [ 4.5, 4.7, 3, 4.5 ]

















////copy more than one priperty from an object /./////////////////////////////////////////////////////



// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];

// const result = movies.map((element) => ({
//     title: element.title, // Include the title
//     rating: element.rating // Include the rating
// }));

// console.log(result);


//output
// [
//     { title: 'a', rating: 4.5 },
//     { title: 'b', rating: 4.7 },
//     { title: 'c', rating: 3 },
//     { title: 'd', rating: 4.5 }
//   ]

























/// add some more property to an object //////////////////////////////////////////////////




const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const result = movies.map((element) => ({
    title: element.title, // Include the title
    rating: element.rating, // Include the rating
    extra: 'xxxxxxxxxx'

}));

console.log(result);


//output
// [
//     { title: 'a', rating: 4.5, extra: 'xxxxxxxxxx' },
//     { title: 'b', rating: 4.7, extra: 'xxxxxxxxxx' },
//     { title: 'c', rating: 3, extra: 'xxxxxxxxxx' },
//     { title: 'd', rating: 4.5, extra: 'xxxxxxxxxx' }
//   ]