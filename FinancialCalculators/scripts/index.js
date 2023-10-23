"use strict"

window.onload = init; 

function init(){
    
    // first we give value to the button
    let calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateBtnClicked;

}

function calculateBtnClicked(){
    // input values
    let principal = document.getElementById("principal");
    let interestRate = document.getElementById("interestRate");
    let loanLength = document.getElementById("loanLength");
    let expectedPay = document.getElementById("expectedPay");
    let interestPaid = document.getElementById("interestPaid");

    // calculate code

    let inputPrincipal = Number(principal.value);
    let inputInterestRate = Number(interestRate.value);
    let inputLoanLength = Number(loanLength.value);

    let monthlyInterestRate = inputInterestRate / 100 / 12;
    let loanLengthMonths = inputLoanLength * 12;

    let monthlyPayment = (inputPrincipal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanLengthMonths));

    monthlyPayment = monthlyPayment.toFixed(2);

    let totalAmount = (monthlyPayment * loanLengthMonths) - inputPrincipal;

    // display value

    expectedPay.value = monthlyPayment;
    interestPaid.value = totalAmount;
}
