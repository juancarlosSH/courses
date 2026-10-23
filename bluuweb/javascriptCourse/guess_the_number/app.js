let magicNumber = Math.floor(Math.random() * (10 - 1)) + 1;
let userLife = 3;

let userNumber;
console.log(magicNumber);

while (magicNumber !== userNumber && userLife > 0) {
  userNumber = parseInt(prompt("What is the number?"));
  if (userNumber === magicNumber) {
    console.log("You win!");
  } else {
    userLife--;
    console.log("Incorrect.");
  }

  if (userLife === 0) {
    console.log("You lose!");
  } else {
    console.log("Try again.");
  }
}
