//001/// this is the first way ////////////////////////////////////

// const person = {
// firstName: 'Manish',
// lastName: 'Prajapati'
// };

// console.log(person.firstName + ' ' + person.lastName);


//output
// Manish Prajapati



















//002/// this is the second way /////////////////////////////////////////////////



// const person = {
//     firstName: 'Manish',
//     lastName: 'Prajapati'
// };

// console.log(`${person.firstName} ${person.lastName}`);







//output
// Manish Prajapati













//003

// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(person.fullName());


//output
// Mosh Hamedani




















/////004///////////////////////////////////////////////////////////////////////////////////////////


const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',

    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';

console.log(person);


//output
// { firstName: 'John', lastName: 'Smith', fullName: [Getter/Setter] }