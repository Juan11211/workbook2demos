"use strict" 

var payRate = 25;
var hoursWorked = 45;
var grossPay; 
var regularPay; 
var overtimePay;
var overtimeHours;

if( hoursWorked <= 40 ){
    grossPay = hoursWorked * payRate; 
} else {
    regularPay = payRate * 40;
    overtimeHours = hoursWorked - 40;
    overtimePay = overtimeHours * (payRate * 1.5)
    grossPay = overtimePay + regularPay
}

console.log(grossPay);



