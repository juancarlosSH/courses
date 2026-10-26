const fruits = [];
const fruit = prompt("Welcome to the supermarket! What fruit do you want?");

fruits.push(fruit);

while (confirm("Would you like to add another fruit to the shopping cart?")) {
  const fruit = prompt("What fruit do you want?");
  fruits.push(fruit);
}

console.log("You buy: ");
for (let fruit of fruits) {
  console.log(fruit);
}
