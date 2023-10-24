"use strict";

window.onload = init;

function init() {
    let changeToCelsiusButton = document.getElementById("changeToCelsius");
    changeToCelsiusButton.onclick = changeToCelsius;

    let changeToFahrenheitButton = document.getElementById("changeToFaherient");
    changeToFahrenheitButton.onclick = changeToFahrenheit;
}

function changeToCelsius() {
    let fahrenheitTempInput = document.getElementById("fahrenheitTemp");
    let celsiusTempOutput = document.getElementById("celsiusTemp");

    // Get the Fahrenheit temperature from the input field
    let fahrenheitTemp = Number(fahrenheitTempInput.value);

    // Convert Fahrenheit to Celsius
    let celsiusTemp = (fahrenheitTemp - 32) * (5/9);

    // Display the result in the Celsius input field
    celsiusTempOutput.value = celsiusTemp.toFixed(2);
}

function changeToFahrenheit() {
    let celsiusTempInput = document.getElementById("celsiusTemp");
    let fahrenheitTempOutput = document.getElementById("faherientTemp");

    // Get the Celsius temperature from the input field
    let celsiusTemp = Number(celsiusTempInput.value);

    // Convert Celsius to Fahrenheit
    let fahrenheitTemp = (celsiusTemp * 9/5) + 32;

    // Display the result in the Fahrenheit input field
    fahrenheitTempOutput.value = fahrenheitTemp.toFixed(2);
}
