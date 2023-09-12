//? BASICS
const names = ["Michael", "July"];

console.log(names);

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    console.log(input)
})


function calc(circ: number) {
    return circ * Math.PI;
}

console.log((calc(2)))


//? ARRAYS AND OBJECTS
// -------------------------------------------------

// arrays
let names = ['Carl', 'Troy', 'Steve'];

names.push('Sharma');

let numbers = [10, 20, 12, 15];

numbers.push(25);

let mixed = ['Pierce', 4, 'Abed', 8, 9];

mixed.push('Marge');
mixed.push(10);
mixed[0] = 3;

// objects
let person = {
  name: 'Troy',
  location: 'UK',
  age: 30
};

person.age = 40;
person.name = 'Marge';

person = {
  name: 'Steve',
  location: 'USA',
  age: 40,
};


//? EXPLICIT TYPES

let character: string = 'Stef';
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn = true;

// arrays
let newNames: string[] = [];

newNames.push('Mike');
newNames.push('Brenda');
console.log(newNames);

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('greetings');
mixed.push(false);
mixed.push(80);
console.log(mixed);

let uid: string|number;

// objects
let nameOne: object;
nameOne = { name: 'Crow', age: 30 };

let nameTwo: {
  name: string,
  age: number,
  beltColour: string
};
nameTwo = { name: 'Shin', age: 24, newLocation: 'Canada' };