"use strict";

// Define the annual interest rate (in percentage form)
var annualInterestRate = 5; // Replace with the actual annual interest rate

// Calculate the approximate years to double using the Rule of 72
var yearsToDouble = (72 / annualInterestRate).toFixed(2);

console.log("Annual Interest Rate: " + annualInterestRate + "%");
console.log("Approximate Years to Double: " + yearsToDouble + " years");


