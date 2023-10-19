//? TYPE CASTING
const anchor = document.querySelector('a')!;

// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});


//? CLASSES & ACCESS MODIFIERS
class Invoice {
  // client: string;
  // details: string;
  // amount: number;

  constructor(
    readonly client: string, 
    private details: string, 
    public amount: number
    ){}

  format() {
    return `${this.client} is owed £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("James", "building new framework", 700);
const invTwo = new Invoice("Mark", "doing all the chores", 50);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(invoice => {
  console.log(invoice.client, invoice.amount, invoice.format())
})