let person = {
    name: 'Mosh',
    marks:100

};

Object.defineProperty(person, 'name', {  //here we set the property for our name property in the person object
    writable: false,
    enumerable:false

});


for(let x in person)
    console.log(x, person[x])

//output
// marks 100                // we get this beacuse property are define our name in the person object