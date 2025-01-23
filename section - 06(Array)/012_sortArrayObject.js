////001/// here we want to sort the object of array .////////////////////////////////
/// but here the solution is not work ///////////////////////////////////////////
// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'JavaScript' }
//   ];


// number.sort();

// console.log(number);

//output
// [  { id: 1, name: 'Node.js' }, { id: 2, name: 'JavaScript' } ]





























////002/// here we want to sort the object of array////////////////////////////////
// work in the upper case only or lower case only

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'JavaScript' },
// ];

// courses.sort(function (a, b) {
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0

//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// });

// console.log(courses);


// //outpit
// // [ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ]



























////003/// here we want to sort the object of array////////////////////////////////
// work in the upper case only or lower case only

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
];


courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});



console.log(courses);


//outpit
// [ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ]




