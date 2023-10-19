"use strict";
//? TYPE CASTING
const anchor = document.querySelector('a');
// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//? CLASSES & ACCESS MODIFIERS
class Invoice {
    // client: string;
    // details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} is owed £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("James", "building new framework", 700);
const invTwo = new Invoice("Mark", "doing all the chores", 50);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
