// assignment 1

// let number = Number(prompt("Enter a number:"));

// let sum = 0;

// for (let i = 1; i <= number; i++) {
//     sum = sum + i;
// }

// console.log("The sum is " + sum);


// assignment 2

// let number = Number(prompt("Enter a number:"));

// for (let i = 1; i <= 12; i++) {
//     console.log(number + " x " + i + " = " + (number * i));
// }

// assignment 3

// let password;

// do {
//     password = prompt("Enter your password:");
// } while (password !== "1234");

// console.log("Access granted");


// assignment 4

// let num1 = Number(prompt("Enter the first number:"));

// let num2 = Number(prompt("Enter the second number:"));

// let operation = Number(prompt("1. Additionn\n2. Subtraction\ n3. Multiplication\n4. Division\nSelect an operation"));

// switch (operation) {
//     case 1:
//         console.log("Result: " + (num1 + num2));
//         break;

//     case 2:
//         console.log("Result: " + (num1 - num2));
//         break;

//     case 3:
//         console.log("Result: " + (num1 * num2));
//         break;

//     case 4:
//         if (num2 === 0) {
//             console.log("Cannot divide by zero");
//         } else {
//             console.log("Result: " + (num1 / num2));
//         }
//         break;

//     default:
//         console.log("Invalid operation");
// }

// assignment 5

let option = Number(prompt(" 1. Register Student \ 2.  Check Results \ 3. Pay School Fees \ 4.Pay School Fees\ , Select an option (1-4):"));

switch (option) {
    case 1:
        console.log("Register Student selected");
        break;

    case 2:
        console.log("Check Results selected");
        break;

    case 3:
        console.log("Pay School Fees selected");
        break;

    case 4:
        console.log("Thank you for using the system");
        break;

    default:
        console.log("Invalid option");
}