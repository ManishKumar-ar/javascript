// addresss object with property  - street , city zipCode
//and a function -showAddress() that take that address and iterate all the property



const address ={
    street:"jsp neemrana",
    city:"neemrana",
    zipcode:301705
};


function showAddress(address)
{
    for( let i in address)
    {
        console.log(i,address[i]);
    }
}

showAddress(address);


//output
// street jsp neemrana
// city neemrana
// zipcode 301705