// console.log('Hello world');

// let interestRate = 0.3;

// console.log(interestRate);


/**
 * primitive data types
 */
let name = "shiva"; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let firstName = undefined;
let lastName = null;

/**
 * dynamic type
 */


/**
 * Reference type
 * object
 * arrays
 * 
 */

let person = {
    name: 'shiva',
    age: 29
}

// console.log(person);
// console.log(person.name);

let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
selectedColors[2] = 1;
console.log(selectedColors.length);
let persons = [{
        name: 'shiva',
        age: 29
    },
    {
        name: 'savi',
        age: 22
    }
]

// console.log(persons);

/**
 * functions
 */

function greet(name = 'unknown', lastName = 'lastName') {
    console.log(`hello ${name} ${lastName}`);
}

function square(number) {
    return number * number;
}

console.log(square(2));

// greet();
// greet('shiva', 'katti');