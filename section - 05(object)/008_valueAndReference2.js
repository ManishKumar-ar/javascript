let x = { value: 10 };
let y = x;

x.value = 20;


console.log(`value of x is ${x}`);
console.log(`value of y is ${y}`);


console.log(`value of x is ${x.value}`);  // Outputs: value of x is 20
console.log(`value of y is ${y.value}`);  // Outputs: value of y is 20


//output
// value of x is [object Object]
// value of y is [object Object]
// value of x is 20
// value of y is 20