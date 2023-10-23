"use strict";

let grossPay; 
let pay = 25;
let hoursWorked = 40;
let numOfWeeks = 52;
let tax;
let yearlyPay;

grossPay = hoursWorked * pay;
yearlyPay = grossPay * numOfWeeks;

if (yearlyPay < 12000) {
   tax = yearlyPay * 0.00;
} else if (yearlyPay >= 12000 && yearlyPay <= 24999.99) {
    tax = yearlyPay * 0.06;
} else if (yearlyPay >= 25000 && yearlyPay <= 74999.99) {
    tax = yearlyPay * 0.11;
} else {
    tax = yearlyPay * 0.20;
}

console.log('You made over ' + yearlyPay + ' this year');
console.log('You owe ' + tax + ' in taxes for the year because youre filing status is joint');

let weeklyTax;

weeklyTax = tax / numOfWeeks;

console.log('Your weekly tax is ' + weeklyTax);

