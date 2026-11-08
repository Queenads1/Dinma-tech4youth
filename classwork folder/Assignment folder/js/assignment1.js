let stdName = prompt("Enter your name:");
let stdScore = prompt("Enter your score out of 100:");

// let score = Number(input);

if (isNaN(stdScore) || stdScore < 0 || stdScore > 100 ) {
    console.log("Invalid score")
}  else if (stdScore >= 80) {
    console.log(stdName + ", your grade is A. Excellent!");
} else if (stdScore >= 70) {
    console.log(stdName + ", your grade is B. Very Good!");
} else if (stdScore >= 60) {
    console.log(stdName + ", your grade is C. Good!");
} else if (stdScore >= 50) {
    console.log(stdName + ", your grade is D. Pass!");
} else {
    console.log(stdName + ", your grade is F. Fail!");
}


// assignment 2


let balance = Number(prompt("Enter your balance"));
let withdraw = Number(prompt("Enter withdrawal amount"));


if (isNaN(balance) || isNaN(withdraw) || balance < 0 ) {
    console.log("Invalid input")
}else if (
    withdraw <= 0) {
    console.log("Insufficient withdrawal");
} else if (withdraw > balance) {
    console.log("Insufficient funds");
} else if (withdraw > 100000) {
    console.log("Withdrawal exceeds the daily limit");
} else if (withdraw === balance) {
    console.log("Withdrawal successful. Your balance is now zero");
} else {
    let remainingBalance = balance - withdraw;

    console.log("Withdrawal successful.");
    console.log("Remaining balance: ₦" + remainingBalance);
}

// assignment 3

let name = prompt("Enter customer name:");
let unitsInput = Number(prompt("Enter units consumed:"));
let units = (unitsInput);
// if (isNaN(stdScore) || stdScore < 0 || stdScore > 100 ) {
//     console.log("Invalid score")


// if (name === null || name.trim() === "") {
//     console.log("Invalid customer name");
// } else if (
//     unitsInput === null ||
//     unitsInput.trim() === "" ||
//     !Number.isFinite(units) ||
//     units < 0
// ) {
    // console.log("Invalid units");

    if (isNaN(unitsInput) || unitsInput < 0){
} else {
    let rate;
    if (units <= 100) {
        rate = 50;
    } else if (units <= 200) {
        rate = 75;
    } else {
        rate = 100;
    }

    let bill = units * rate;

    console.log("Customer: " + name);
    console.log("Units consumed: " + units);
    console.log("Rate per unit: ₦" + rate);
    console.log("Total bill: ₦" + bill);
}

// option 2
// let name = prompt("Enter customer name:");
// let unitsInput = prompt("Enter units consumed:");
// let units = Number(unitsInput);

// if (name === null || name.trim() === "") {
//     console.log("Invalid customer name");
// } else if (
//     unitsInput === null ||
//     unitsInput.trim() === "" ||
//     !Number.isFinite(units) ||
//     units < 0
// ) {
//     console.log("Invalid units");
// } else {
//     let rate;

//     if (units <= 100) {
//         rate = 50;
//     } else if (units <= 200) {
//         rate = 75;
//     } else {
//         rate = 100;
//     }

//     let bill = units * rate;

//     console.log("Customer: " + name);
//     console.log("Units consumed: " + units);
//     console.log("Rate per unit: ₦" + rate);
//     console.log("Total bill: ₦" + bill);
// }

// assignment 4

// let username = prompt("Enter your username:");
// let password = prompt("Enter your password:");

// if (
//     username === null ||
//     password === null ||
//     username.trim() === "" ||
//     password.trim() === ""
// ) {
//     console.log("Invalid username and password");
// } else if (username === "admin" && password === "12345") {
//     console.log("Login successful. Welcome, Admin!");

//     let role = prompt("Enter your role: admin or editor");

//     if (role === null) {
//         console.log("Access denied");
//     } else if (role.trim().toLowerCase() === "admin") {
//         console.log("Full access granted");
//     } else if (role.trim().toLowerCase() === "editor") {
//         console.log("Editing access granted");
//     } else {
//         console.log("Access denied");
//     }
// } else if (username === "admin") {
//     console.log("Username not found");
// } else if (password === "12345") {
//     console.log("Incorrect password");
// } else {
//     console.log("Invalid username and password");
// } 

// assignment 5

// let name = prompt("Enter customer name:");
// let amountInput = prompt("Enter purchase amount:");
// let typeInput = prompt("Enter customer type: regular or premium");

// let amount = Number(amountInput);
// let type = typeInput === null ? "" : typeInput.trim().toLowerCase();

// if (name === null || name.trim() === "") {
//     console.log("Invalid customer name");
// } else if (
//     amountInput === null ||
//     amountInput.trim() === "" ||
//     !Number.isFinite(amount) ||
//     amount < 0
// ) {
//     console.log("Invalid purchase amount");
// } else if (type !== "regular" && type !== "premium") {
//     console.log("Invalid customer type");
// } else {
//     let discount = 0;

//     if (amount >= 100000) {
//         discount = 15;
//     } else if (amount >= 50000) {
//         discount = 10;
//     } else if (amount >= 10000) {
//         discount = 5;
//     }

//     if (type === "premium" && amount >= 10000) {
//         discount = discount + 5;
//     }

//     let discountAmount = amount * discount / 100;
//     let finalAmount = amount - discountAmount;

//     console.log("Customer: " + name);
//     console.log("Original amount: ₦" + amount);
//     console.log("Discount: " + discount + "%");
//     console.log("Discount amount: ₦" + discountAmount);
//     console.log("Final amount to pay: ₦" + finalAmount);
// }