// * Template string

// Interpolation of expressions.

let username = "Juan";
let userStatus = true;
console.log("\nWelcome\n" + username + "\n");
console.log(`Welcome ${username}`);
console.log(`Welcome ${username.toUpperCase()}`);
console.log(`${userStatus ? "Online" : "Offline"}`);

// * var vs let vs const

// With `var`, you can overwrite the value of a variable.

var platformStatus = true;
var platformStatus = false;
console.log(platformStatus);

if (!platformStatus) {
  var platformStatus = true;
  console.log(platformStatus);
}

console.log(platformStatus);

// With `let`, you can change the value of a variable, but only because you know it can change.

let lastName = "Juan";
lastName = "Suarez";
console.log(lastName);

if (lastName === "Suarez") {
  let lastName = "Hernandez";
  console.log(lastName);
}

console.log(lastName);

/* Note: The scope is different for both options, since they work differently. With `var`,
    the scope is global depending on where the variable is declared, and with `let`, the scope
    is limited to the variable's declaration. For example, see the `if` statements in the code
    above. */

/* With `const`, it behaves differently—it retains the properties of `let`. But the difference is that
the value is read-only; once declared, we cannot change the value, except for objects and arrays
(in these cases, the modification is internal, and we can change them, but not the main variable). */

const PI = 3.1416;

// PI = 3; MARK ERROR

if (PI === 3.1416) {
  const PI = 3.141519;
  console.log(PI);
}

console.log(PI);

// * Array vs const

const fruits = ["banana", "apple", "watermelon", "pear"];
console.log(fruits);
fruits[4] = "orange";
console.log(fruits);

// push

fruits.push("pineapple");
console.log(fruits);

// unshift

fruits.unshift("grape");
console.log(fruits);

// pop

console.log(fruits.pop());
console.log(fruits);

// shift

console.log(fruits.shift());
console.log(fruits);
