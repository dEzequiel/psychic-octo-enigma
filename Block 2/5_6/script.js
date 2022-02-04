// Prompt and parse the string value returned by prompt() to int primitive value with parseInt()

let firstNumber = parseInt(prompt("First number: "));
let secondNumber = parseInt(prompt("Second number: "));

if (firstNumber > secondNumber) {
    alert(`${firstNumber} is the bigger`);
} else {
    alert(`${secondNumber} is the bigger`);
}


let thirdNumber = parseInt(prompt("First number: "));
let fourthNumber = parseInt(prompt("Second number: "));

alert(`The sum is ${thirdNumber + fourthNumber}`);