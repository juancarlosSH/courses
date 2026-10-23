// * Array

let fruits = ["banana", "apple", "watermelon"];
console.log(fruits);
console.log(fruits.length);

console.log("========= While =========");
let index = 0;
while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

// * for

console.log("========= For =========");
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  console.log(fruit);
}

// * for of

console.log("========= For of =========");
for (const fruit of fruits) {
  console.log(fruit);
}

for (const character of fruits[0]) {
  console.log(character);
}

// * Functions

// Simple function
function greetingMessage() {
  console.log("Hello Juan");
}

greetingMessage();

// function with return
function greetingMessageV2() {
  return "Hello Juan V2";
}

console.log(greetingMessageV2());

// function with one or more parameters
function greetingMessageV3(username) {
  console.log("Hello " + username + " V3");
}

greetingMessageV3("Juan");
