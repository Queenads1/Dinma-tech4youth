let nobleGases = ["he","we", "she", "Ar"  ];
nobleGases[4] = "Beans"
console.log(typeof nobleGases)
console.log(nobleGases)
console.log(nobleGases[4])
console.log(nobleGases.length)



// let elements = [
//     ["h","he", "she"],  ["h","he", "she"],  ["h","he", "she"],  ["h","he", "she"]  ]; 

//     console.log(elements [0] [1])

//     let firstGrou 

let animals = ["pig", "dog", "sheep"]

console.log (animals.toString()) 
console.log (animals.join(" + "))

// let doughCopy = dough1.slice(0, 3)
// console.log (doughCopy) 

let stdScore = [ 10, 40, 30]

let newScore = stdScore.map ((item)=>{
    return item + 10
})

console.log (newScore)

let nums = [ 10, 15, 20, 55, 40, 30]

let res = nums.filter ( (num)=>{
    return num > 20
})

console.log (res)



// CLASSWORK 

// no 1
let str_msg = "Today is wednesday"

let search = prompt("enter a word")

function searchWord(){
    if (str_msg.includes(search)){
        console.log(search.split("").reverse().join(""))
       
    }else{
        console.log("word not found")
    }
}
searchWord()

// no 3

function getNumbers() {
    let numbers = [];

    for (let i = 1; i <= 500; i++) {
        numbers.push(i);
    }

    return numbers;
}

console.log(getNumbers());

function getEvenAndOdd(numbers) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    }

    return {
        even: evenNumbers,
        odd: oddNumbers
    };
}

let numbers = Array.from({ length: 500 }, (_, i) => i + 1);

let result = getEvenAndOdd(numbers);

console.log("Even numbers:", result.even);
console.log("Odd numbers:", result.odd);


// no 2

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hi")); 
console.log(isPalindrome("level")); 


// NO 4

let 




