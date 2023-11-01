//? CLASSES & ACCESS MODIFIERS
export class Invoice {
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