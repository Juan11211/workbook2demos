"use strict"

let deptName;

let deptCode;

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

    // "use strict";

    // let deptName;
    // let deptCode;
    
    // // Assign a value to deptCode
    // switch (deptName) {
    //     case "Marketing":
    //         deptCode = 1;
    //         break;
    //     case "Human Resources":
    //         deptCode = 5;
    //         break;
    //     case "Accounting":
    //         deptCode = 10;
    //         break;
    //     case "Legal":
    //         deptCode = 12;
    //         break;
    //     case "IT":
    //         deptCode = 18;
    //         break;
    //     case "Customer Relations":
    //         deptCode = 20;
    //         break;
    //     default:
    //         deptCode = "Unknown Department";
    //         break;
    // }
    
    // console.log(`Department Name: ${deptName}`);
    // console.log(`Department Code: ${deptCode}`);
    