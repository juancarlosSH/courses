// * forIn

let cat = {
  catName: "Black",
  //   sleep: true,
  age: 10,
  enemies: ["water", "dogs"],
};

for (const property in cat) {
  if (!Object.hasOwn(cat, property)) continue;

  const value = cat[property];

  console.log(value);
}

// * Objects.values()

console.log(Object.values(cat));

// * Destructuring objects and alias

const { catName: catName2, sleep = false, age } = cat;

console.log(catName2);
console.log(sleep);
console.log(age);

// * getter and setter

cat = {
  catName: "Black",
  sleep: true,
  age: 10,
  enemies: ["water", "dogs"],

  get catNameUpperCase() {
    return this.catName.toUpperCase();
  },

  set addNewEnemy(newEnemy) {
    this.enemies.push(newEnemy);
  },
};

console.log(cat.catNameUpperCase);

cat.addNewEnemy = "Other cats";
console.log(cat.enemies);

// * By value and by reference.

let a = "Hello";
let b = a;

a = "Good bye";
console.log(b);

let c = ["Hello"];
let d = c;

c.push("Good bye");
console.log(d);
