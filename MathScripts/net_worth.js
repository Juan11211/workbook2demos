"use strict"

var cash = 1000;
var investmentAccount = 5000;

var creditCardDebit = 1300;
var bills = 2000;

var totalAssets = cash + investmentAccount;

var totalDebit = creditCardDebit + bills;

var netWorth = totalAssets - totalDebit;

console.log("My networth is " + netWorth);