function addNumber(firstNumber, secondNumber) {
  return parseInt(firstNumber) + parseInt(secondNumber);
}

let firstNumber = prompt("Type a number: ");
let secondNumber = prompt("Type a number to add: ");

console.log(addNumber(firstNumber, secondNumber));
