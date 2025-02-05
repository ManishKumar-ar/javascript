let person = { name: 'Mosh' };

// The prototype (__proto__) of person is retrieved and stored in objectBase.
// Since person is a plain object {}, its prototype is Object.prototype.
let objectBase = Object.getPrototypeOf(person);

console.log(Object.getOwnPropertyDescriptor(objectBase));  //this is use to make it iteratable


//output
// [
//     'constructor',
//     '__defineGetter__',
//     '__defineSetter__',
//     'hasOwnProperty',
//     '__lookupGetter__',
//     '__lookupSetter__',
//     'isPrototypeOf',
//     'propertyIsEnumerable',
//     'toString',
//     'valueOf',
//     '__proto__',
//     'toLocaleString'
//   ]

