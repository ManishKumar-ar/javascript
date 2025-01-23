const meesage = "this is the manish kumar";

const result =  meesage.split(" ")  //here we want that the split is done on the basic of white space

console.log(result); // now the result become a array
//so we can apply the join method here

const result2 = result.join('-'); // here we want to combine the element with -

console.log(result2);


//output
// [ 'this', 'is', 'the', 'manish', 'kumar' ]
// this-is-the-manish-kumar