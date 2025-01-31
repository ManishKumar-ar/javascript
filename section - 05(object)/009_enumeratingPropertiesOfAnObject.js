// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// // //Using `for...in` to iterate over all enumerable properties

// for (let key in circle) {
//     console.log(`${key} : ${circle[key]}`); // Outputs keys and their values
// }


// //output
// // radius 1
// // draw [Function: draw]



// // radius : 1
// // draw : draw() {
// // console.log('draw');
// // }







// //2//////Using `Object.keys` to get an array of the object's own keys//////////////////////////////


// // const circle = {
// //     radius: 1,
// //     draw() {
// //         console.log('draw');
// //     }
// // };



// // for (let key of Object.keys(circle)) {
// //     console.log(key);                    // Outputs only the keys
// // }


// //output
// // radius
// // draw



// ///3//////Using `Object.entries` to get key-value pairs as arrays//////////////////////////////////////////////////////////////////////////////////

// // const circle = {
// //     radius: 1,
// //     draw() {
// //         console.log('draw');
// //     }
// // };




// // for (let entry of Object.entries(circle)) {
// //     console.log(entry); // Outputs an array for each key-value pair
// // }



// // output
// // [ 'radius', 1 ]
// // [ 'draw', [Function: draw] ]







// ////4////////////Checking if a property exists in the object///////////////////////////////////////////////////////////////////////////

// // const circle = {
// //     radius: 1,
// //     draw() {
// //         console.log('draw');
// //     }
// // };




// // if ('radius' in circle) {
// //     console.log('yes'); // Outputs 'yes' if 'color' exists
// // }


// //output
// //yes





