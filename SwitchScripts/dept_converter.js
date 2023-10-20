"use strict"

let deptName ;

let deptCode = 5;

switch (deptCode) {
    case 1:
        deptName = "Marketing"
        break;
    case 5:
        deptName = "Human Resources"
        break;
    case 10:
        deptName = "Accounting"
        break;
    case 12: 
        deptName = "Legal"
        break;
    case 18: 
        deptName = "IT"
        break;
    case 20:
        deptName = "Customer Relations"
        break;
        default:
            deptName = "Unknown Department";
            break;
    }
    
    console.log(`Department Code: ${deptCode}`);
    console.log(`Department Name: ${deptName}`);