
// 001 /// we are close to get the answer ///////////////////////////////////

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];

// let array = [];

// const result = movies.find(function (element) {
//     if (element.year === 2018 && element.rating >= 4) {
//         console.log(element.title)
//     }

// })




































// 002 /// we are close to get the answer ///////////////////////////////////

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];


const resul = movies
    .filter((element) => element.year === 2018 && element.rating >= 4)
    .sort()
    .reverse()
    .map(m =>m.title)


console.log(resul);


//output
// [ 'b', 'a' ]