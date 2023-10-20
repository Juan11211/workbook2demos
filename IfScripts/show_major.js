"use strict";

let studentName = "Juan";
let studentMajor = "CSCI";
let location;

if (studentName === "Juan" && studentMajor === "CSCI") {
    location = "Sheppard Hall, Room 314";
} else if (studentName === "Kristina" && studentMajor === "MKT") {
    location = "Westly Hall, Room 310";
} else if (studentName === "Elijah" && studentMajor === "BIOL") {
    location = "Science Bldg, Room 310";
} else if (studentName === "Lily" && studentMajor === "HIST") {
    location = "Kerr Hall, Room 314";
} else {
    studentMajor = "Unknown";
    location = "Unknown";
}

console.log("Student: " + studentName);
console.log("Major: " + studentMajor);
console.log("Location: " + location);
