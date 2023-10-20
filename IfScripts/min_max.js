"use strict"

let a = 5;
let b = 6;
let c = 7;

let smallNum;
let largeNum;

if ( a <= b && a <= c){
    smallNum = a;
} else if ( b <= a && b <= c){
    smallNum = b;
} else {
    smallNum = c;
} 

if ( a >= b && a >= c ){
    largeNum = a;
} else if ( b >= a && b >= c ){
    largeNum = b;
} else {
    largeNum = c;
}

console.log("Smallest number is " + smallNum + " and the largest is " + largeNum)