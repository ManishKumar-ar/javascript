let person = { name: 'Mosh' };

Object.defineProperty(person, 'name', { //here we set the property for our name property in the person object
    writable: false
});


console.log(person.name);

person.name = 'manish';

console.log(person.name);


//output
// Mosh
// Mosh