"use strict";

window.onload = init;

function init() {

    let futureBtn = document.getElementById("futureBtn");
    futureBtn.onclick = futureBtnClicked;
}


function futureBtnClicked() {
    // Define our inputs
    let deposit = document.getElementById("deposit");
    let interestRate = document.getElementById("interestRate");
    let years = document.getElementById("years");

    // Get input values
    let depositValue = Number(deposit.value);
    let interestRateValue = Number(interestRate.value);
    let yearsValue = Number(years.value);

    // Calculate the daily interest rate
    let dailyInterestRate = interestRateValue / 365;

    // Calculate the future value with daily compounding
    let futureValue = depositValue * Math.pow(1 + dailyInterestRate, 365 * yearsValue);

    // Calculate the total interest earned
    let totalInterest = futureValue - depositValue;

    // Set the value property of input elements
    let futureValueElement = document.getElementById("futureValue");
    let interestEarnedElement = document.getElementById("interestEarned");

    futureValueElement.value = futureValue.toFixed(2);
    interestEarnedElement.value = totalInterest.toFixed(2);
}
