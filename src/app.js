"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invoice_js_1 = require("./classes/Invoice.js");
//? TYPE CASTING
// const anchor = document.querySelector('a')!;
// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
var invOne = new Invoice_js_1.Invoice("James", "building new framework", 700);
var invTwo = new Invoice_js_1.Invoice("Mark", "doing all the chores", 50);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (invoice) {
    console.log(invoice.client, invoice.amount, invoice.format());
});
