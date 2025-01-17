function ShowAddress(street, city, zipcode) {

    this.street = street,
        this.city = city,
        this.zipcode = zipcode

}

const obj1 = new ShowAddress("jsp", "neemrana", 301705);
const obj2 = new ShowAddress("jsp", "neemrana", 301705);
const obj3 = obj1;


function areEqual(obj1, obj2) {
    return obj1.street === obj2.street && obj1.city === obj2.city && obj1.zipcode === obj2.zipcode
}

function areSame(obj1, obj2) {
    return obj1 === obj2;
}


console.log(areEqual(obj1, obj2));
console.log(areSame(obj1, obj2));
console.log(areSame(obj1, obj3));

//output
//true
// false
// true