// * Anonymous functions.

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(randomNumber(1, 10));

// * Arrow function.

/* You can omit the parentheses if the arrow function has only one parameter,
and you can omit the `return` statement if the function contains only a single
line of code. */

const randomNumberV2 = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(randomNumberV2(10, 100));

// * foreach

/* The `index` and `array` properties also exist as elements of the `foreach` loop,
but they are only declared if necessary. */

const fruits = ["banana", "apple", "pineapple"];

fruits.forEach((fruits) => console.log(fruits));

// * Objects

const user = {
  username: "Juan",
  age: 27,
  verified: true,
};

console.log(user);
console.log(user.username);
console.log(user["age"]);

// * CRUD

// Create

user.nationality = "Mexican";

// Read

console.log(user.nationality);

// Update

user.age = 18;

// Delete

delete user.verified;

// * hasOwnProperty

console.log(user.hasOwnProperty("age"));

// * Nested objects.

const pet = {
  petName: "Toby",
  type: "Dog",
  friends: [
    { petName: "Marshall", type: "Dog" },
    { petName: "Black", type: "Cat" },
  ],
};

console.log(pet.friends[0].petName);

// * Optional chaining.

if (pet.friends[1]?.types) {
  console.log("Exist.");
} else {
  console.log("Not exist.");
}

// * Properties, methods, and `this`.

const cellphone = {
  brand: "Apple",
  on: false, // <-- property
  batteryStatus: 100,

  // method
  turnOn: function () {
    this.on = !this.on; // <-- this
  },

  // method
  downloading() {
    this.batteryStatus--;
  },
};
