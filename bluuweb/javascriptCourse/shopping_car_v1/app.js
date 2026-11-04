const aFruits = [
  "Apple 🍎",
  "Banana 🍌",
  "Lemon 🍋",
  "Orange 🍊",
  "Pear 🍐",
  "Pineapple 🍍",
];

const oShoppingCart = {};
const elShoppingCart = document.getElementById("ShoppingCart");
let elFragment = document.createDocumentFragment();

function drawShoppingCart() {
  elShoppingCart.textContent = "";
  const aFruits = Object.getOwnPropertyNames(oShoppingCart);
  aFruits.forEach((sFruitID) => {
    const elListTemplate = document.getElementById("listTemplate");
    const elCloneListTemplate =
      elListTemplate.content.firstElementChild.cloneNode(true);
    const elHeader4 = elCloneListTemplate.querySelector("h4");
    const elSpan = elCloneListTemplate.querySelector("span");
    elHeader4.textContent = oShoppingCart[sFruitID].title;
    elSpan.textContent = oShoppingCart[sFruitID].amount;
    elHeader4.appendChild(elSpan);
    elFragment.appendChild(elCloneListTemplate);
  });

  elShoppingCart.appendChild(elFragment);
}

const addFruit = (e) => {
  const sFruitID = e.target.dataset.fruit;
  const oFruit = {
    id: sFruitID,
    title: sFruitID,
    amount: 1,
  };

  if (Object.hasOwn(oShoppingCart, sFruitID)) {
    oShoppingCart[sFruitID].amount++;
  } else {
    oShoppingCart[sFruitID] = oFruit;
  }

  drawShoppingCart();
};

const elCardsContainer = document.getElementById("cardsContainer");
elFragment = document.createDocumentFragment();

aFruits.forEach((sFruit) => {
  const elCardTemplate = document.getElementById("cardTemplate");
  const elCloneCardTemplate =
    elCardTemplate.content.firstElementChild.cloneNode(true);
  const elHeader4 = elCloneCardTemplate.querySelector("h4");
  const elButton = elCloneCardTemplate.querySelector("button");
  elHeader4.textContent = sFruit;
  elButton.dataset.fruit = sFruit;
  elButton.addEventListener("click", addFruit);
  elFragment.appendChild(elCloneCardTemplate);
});

elCardsContainer.appendChild(elFragment);
