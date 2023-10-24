"use strict"

window.onload = init;

function init() {

    let annuityBtn = document.getElementById("annuityBtn");
    annuityBtn.onclick = annuityBtnClicked;
}

function annuityBtnClicked() {
    // Get input elements
    let monthlyPayInput = document.getElementById("monthlyPay");
    let expectedInterestRateInput = document.getElementById("expectedInterestRate");
    let yearsToPayInput = document.getElementById("yearsTopay");
    let presentValueOutput = document.getElementById("presentValue");

    // Convert input values to numbers
    let monthlyPayment = Number(monthlyPayInput.value);
    let annualInterestRate = Number(expectedInterestRateInput.value) / 100; // Convert to decimal
    let yearsToPay = Number(yearsToPayInput.value);

    // Calculate the number of months
    let numberOfMonths = yearsToPay * 12;

    // Calculate the present value
    let presentValue = monthlyPayment * ((1 - Math.pow(1 + annualInterestRate / 12, -numberOfMonths)) / (annualInterestRate / 12));

    // Display the result
    presentValueOutput.value = presentValue.toFixed(2);
}
 