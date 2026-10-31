const elColorPicker = document.getElementById("colorInput");
const elColorButton = document.getElementById("colorButton");
const elColorLabel = document.getElementById("selectedColor");
const elColorCard = document.getElementById("selectedColorCard");

elColorButton.addEventListener("click", () => {
  const sColor = elColorPicker.value;
  elColorLabel.textContent = sColor;
  elColorCard.style.backgroundColor = sColor;
});
