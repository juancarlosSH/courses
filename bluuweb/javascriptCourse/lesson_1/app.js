console.log("Hello World");

// this a one line comment.

/* This
is
a
multiline
comment */

// * Data types.

// string
console.log("Hellos this is a string.");

// int
console.log(10);

// boolean
console.log(true);

// * Variables.

let number = 10;

let username = "Juan";

let flag = false;

// * Concatenation.

console.log("Your name is: " + username + " and your number is: " + number);

let firstNumber = prompt("Write a number: ");
let secondNumber = prompt("Write the number to add: ");
console.log(parseInt(firstNumber) + parseInt(secondNumber));

// * Operators.

console.log(parseInt(firstNumber) + parseInt(secondNumber));
console.log(parseInt(firstNumber) - parseInt(secondNumber));
console.log(parseInt(firstNumber) / parseInt(secondNumber));
console.log(parseInt(firstNumber) * parseInt(secondNumber));
console.log(parseInt(firstNumber) % parseInt(secondNumber));

//  * Relational Operators.

console.log(parseInt(firstNumber) < parseInt(secondNumber));
console.log(parseInt(firstNumber) > parseInt(secondNumber));
console.log(parseInt(firstNumber) >= parseInt(secondNumber));
console.log(parseInt(firstNumber) <= parseInt(secondNumber));
console.log(parseInt(firstNumber) == parseInt(secondNumber));
console.log(parseInt(firstNumber) != parseInt(secondNumber));
console.log(parseInt(firstNumber) === parseInt(secondNumber));
console.log(parseInt(firstNumber) !== parseInt(secondNumber));

// * Logical Operators.

console.log(parseInt(firstNumber) || parseInt(secondNumber));
console.log(parseInt(firstNumber) && parseInt(secondNumber));
console.log(!true);

// * Control Structures.

let userWord = prompt("Write 'Javascript'.");

if (userWord === "Javascript") {
  console.log("Correct.");
} else {
  console.log("Incorrect.");
}

// * switch

let userOption = prompt(`Select an option to 1 - 3:`);

switch (parseInt(userOption)) {
  case 1:
    console.log("Option 1");
    break;
  case 2:
    console.log("Option 2");
    break;
  case 3:
    console.log("Option 3");
    break;
  default:
    console.log("This is not an option.");
    break;
}

// * while

number = Math.floor(Math.random() * 10) + 1;

let count = 0;

while (count < number) {
  console.log(count);
  count++;
}
