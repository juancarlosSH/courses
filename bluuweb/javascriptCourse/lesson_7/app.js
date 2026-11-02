// * createElement

const elTestList = document.getElementById("testList");
const elListItem = document.createElement("li");

elListItem.textContent = "Element form JS.";
elTestList.appendChild(elListItem);

// * Fragment

let aCountries = ["Mexico", "Peru", "USA"];

let elFragment = document.createDocumentFragment();

aCountries.forEach((country) => {
  const elListItem = document.createElement("li");
  elListItem.textContent = country;
  elFragment.insertBefore(elListItem, elFragment.firstChild);
});

elTestList.appendChild(elFragment);

// * template HTML

elFragment = document.createDocumentFragment();
const clickCountry = () => console.log("Click");

aCountries.forEach((country) => {
  const elListItemTemplate = document.getElementById("listItemTemplate");
  const elCloneListItemTemplate =
    elListItemTemplate.content.firstElementChild.cloneNode(true);
  const elSpan = elCloneListItemTemplate.querySelector("span");
  elSpan.textContent = country;
  elCloneListItemTemplate.addEventListener("click", clickCountry);
  elFragment.appendChild(elCloneListItemTemplate);
});

elTestList.appendChild(elFragment);
