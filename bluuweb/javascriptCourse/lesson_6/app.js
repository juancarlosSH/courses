// * Document

console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);

// * getElementById

console.log(document.getElementById("title"));
console.log(document.getElementById("title").textContent);
console.log(document.getElementById("title").innerHTML);

// * DOMContentLoaded and defer

/* document.addEventListener("DOMContentLoaded", () => {
  console.log(document.getElementById("title"));
}); */

// * querySelector

console.log(document.querySelector("#title"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("h1"));

console.log(document.querySelectorAll(".text-danger"));

// * querySelector vs getElementById

// Use whichever one works for you first, then worry about efficiency.

// * element

const h1 = document.getElementById("title");

console.log(h1.className);

h1.textContent = "New title from JS.";
h1.style.backgroundColor = "#C4B4FF";
h1.style.color = "#E7E5E4";

// * events

const p = document.querySelector("p.text-danger");
const button = document.querySelector(".btn.btn-primary");

button.addEventListener("click", () => {
  p.textContent = "You clicked the button";
});
