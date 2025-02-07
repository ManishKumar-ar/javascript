let person = {
    name: 'Mosh',
    marks:100

};

Object.defineProperty(person, 'name', { 
    writable: false,
    enumerable:true,
    configurable:false   // means we can't delete it

});


console.log(person)

//output
// { name: 'Mosh', marks: 100 }