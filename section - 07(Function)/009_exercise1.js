// function sum(value)
// {

//     if(value.isArray())
//     {
//         return value.reduce((a,b)=>a+b)
//     }
//     else{
//         const array = arguments;
//         return array.reduce((a,b)=>a+b)
//     }

//     // const result = args.reduce((a,b)=>a+b)
//     // console.log(result);

// }


// const result1 =sum([1,2,3,4]);
// console.log(result1);


// const result2 =sum(1,2,3,4);
// console.log(result2);
























// //002///////////////

// function sum(...items) {

//     return items.reduce((a, b) => a + b)

// }


// const result = sum(1, 2, 3, 4);
// console.log(result);

// //output 
// //10
























//003///////////////////////////////////////////////////////

// function sum(...items) {

//     console.log(items)
//     return items.reduce((a, b) => a + b)

// }

// const result = sum([1, 2, 3, 4]);
// console.log(result);


// [ [ 1, 2, 3, 4 ] ]
// [ 1, 2, 3, 4 ]





///004//////////////solution for both  //////////////////////////////////


console.log(sum([1, 2, 3, 4]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) 
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}


//output
// 10