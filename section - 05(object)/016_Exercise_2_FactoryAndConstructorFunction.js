// initialise an address object using the   --1. factory function
//                                          --2. constructor function


//////////////////////////////////////////using -1////////////////////////////////////////////////////////////////////////

// function showAddress(street, city, zipcode)
// {
//     return{
//        street:street,
//         city:city,
//         zipcode:zipcode

//     }
// }


// const obj1 = new showAddress("jsp","neemrana",301705);
// console.log(obj1);




//////////////////////////using -2/////////////////////////////////////////////////////////////////////////////////

function ShowAddress(street, city, zipcode) {

    this.street = street,
    this.city = city,
    this.zipcode = zipcode

}

const obj1 = new ShowAddress("jsp", "neemrana", 301705);
console.log(obj1);

//output
// ShowAddress { street: 'jsp', city: 'neemrana', zipcode: 301705 }