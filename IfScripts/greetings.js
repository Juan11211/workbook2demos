"use strict";

let now = new Date();
let currentHour = now.getHours();
let greeting;

if (currentHour >= 1 && currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour >= 8 && currentHour < 19) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

console.log(greeting);
