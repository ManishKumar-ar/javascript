
let person = { name: 'Mosh' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);



//output
// {
//     value: [Function: toString],

//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
