"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
//? CLASSES & ACCESS MODIFIERS
var Invoice = /** @class */ (function () {
    // client: string;
    // details: string;
    // amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " is owed \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
