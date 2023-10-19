"use strict";
//? BASICS
// -------------------------------------------------
const names = ["Michael", "July"];
console.log(names);
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    console.log(input);
});
function calc(circ) {
    return circ * Math.PI;
}
console.log((calc(2)));
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
let character = 'Stef';
let age;
let isLoggedIn;
age = 30;
isLoggedIn = true;
//? ARRAYS
let newNames = [];
newNames.push('Mike');
newNames.push('Brenda');
console.log(newNames);
//? UNION TYPES
let newMixed = [];
newMixed.push('greetings');
newMixed.push(false);
newMixed.push(80);
console.log(newMixed);
let uid;
//? OBJECTS
let nameOne;
nameOne = { name: 'Crow', age: 30 };
let nameTwo;
nameTwo = { name: 'Shin', age: 24, newLocation: 'Canada' };
console.log("testing tsc");
//? FUNCTIONS
let greet;
greet = () => {
    console.log("say hello");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(10, 30, '10');
const minus = (a, b) => {
    return a - b;
};
let result = minus(5, 2);
const logDetails = (uid, item) => {
    console.log(`${item} has an id of ${uid}`);
};
const isPresent = (user) => {
    console.log(`${user.name} is present`);
};
const isAlsoPresent = (user) => {
    console.log(`${user.name} is also present`);
};
//? FUNCTION TYPES
//  example 1
let greeting;
greeting = (name, greet) => {
    console.log(`${name} says ${greet}`);
};
// example 2
let calcNums;
calcNums = (numOne, numTwo, type) => {
    if (type === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let detailsObj;
detailsObj = (userObj) => {
    console.log(`${userObj.name} is ${userObj.age} years old.`);
};
