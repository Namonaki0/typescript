//? BASICS
// -------------------------------------------------

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
let moreNames = ['Carl', 'Troy', 'Steve'];

moreNames.push('Sharma');

let numbers = [10, 20, 12, 15];

numbers.push(25);

let mixed = ['Pierce', 4, 'Abed', 8, 9];

mixed.push('Marge');
mixed.push(10);
mixed[0] = 3;

//? OBJECTS
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
// -------------------------------------------------

let character: string = 'Stef';
let age: number;
let isLoggedIn: boolean;

age = 30;

isLoggedIn = true;

//? ARRAYS
let newNames: string[] = [];

newNames.push('Mike');
newNames.push('Brenda');
console.log(newNames);

//? UNION TYPES
let newMixed: (string|number|boolean)[] = [];
newMixed.push('greetings');
newMixed.push(false);
newMixed.push(80);
console.log(newMixed);

let uid: string|number;

//? OBJECTS
let nameOne: object;
nameOne = { name: 'Crow', age: 30 };

let nameTwo: {
  name: string,
  age: number,
  newLocation: string
};
nameTwo = { name: 'Shin', age: 24, newLocation: 'Canada' };

console.log("testing tsc");

//? FUNCTIONS
let greet: Function;

greet = () => {
  console.log("say hello");
}

const add = (a: number, b: number, c: string | number = 10): void => {
  console.log(a + b);
  console.log(c)
}

add(10, 30, '10');

const minus = (a: number, b: number): number => {
  return a - b;
}

let result = minus(5, 2);

//? TYPE ALIASES
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string ) => {
  console.log(`${item} has an id of ${uid}`);
 }

 const isPresent = (user: objWithName) => {
  console.log(`${user.name} is present`);
 }

 const isAlsoPresent = (user: objWithName) => {
  console.log(`${user.name} is also present`);
 }

 //? FUNCTION TYPES
//  example 1
let greeting: (a: string, b: string) => void;

greeting = (name: string, greet: string) => {
  console.log(`${name} says ${greet}`);
}

// example 2
let calcNums: (a: number, b: number, c: string) => number;

calcNums = (numOne: number, numTwo: number, type: string) => {
  if (type === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}
 
// example 3
let detailsObj: (obj: {name: string, age: number}) => void;

type user = {name: string, age: number};

detailsObj = (userObj: user) => {
  console.log(`${userObj.name} is ${userObj.age} years old.`)
}