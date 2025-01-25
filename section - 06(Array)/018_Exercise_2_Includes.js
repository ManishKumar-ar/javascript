function inculde(array, searchElement)
{
    for(let i = 0;i<array.length;i++)
    {
        if(searchElement === array[i]) return true;
    }

    return false;
}


const number  = [1,2,3,4,5,10];
const result  = inculde(number, 50);
console.log(result);


//output 
// false