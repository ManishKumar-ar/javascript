
// let after the default paramter there is one more parameter that not have default value
//then in this case it give an error

function interest(principal, rate =3.5, years) {
  
    return principal * rate / 100 * years;
}

console.log(interest(10000));



//output
// NaN