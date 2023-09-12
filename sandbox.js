//? BASICS
var names = ["Michael", "July"];
console.log(names);
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(input);
});
function calc(circ) {
    return circ * Math.PI;
}
console.log((calc(2)));
//? ARRAYS AND OBJECTS
// -------------------------------------------------
// arrays
var names = ['Carl', 'Troy', 'Steve'];
names.push('Sharma');
var numbers = [10, 20, 12, 15];
numbers.push(25);
var mixed = ['Pierce', 4, 'Abed', 8, 9];
mixed.push('Marge');
mixed.push(10);
mixed[0] = 3;
// objects
var person = {
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
