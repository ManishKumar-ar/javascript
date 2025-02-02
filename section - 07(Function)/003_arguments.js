//001/// here we can see the tatoal arument that we pass ////////



// function sum(a, b) {

//     console.log(arguments);
//     return a + b;
// }

// const result = sum(1, 2, 3, 4, 5);

// console.log(result);

// //output
// // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
// // 3
















////002///we can also work with the all arguments /////
function sum(a, b) {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));


//output
// 25
