// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function () {
  window.onload = function () {
    updatePrice();
  };
})();

var prices = {
  color: {
    silver: 100,
    spaceBlack: 120,
    gold: 130,
    deepPurple: 140,
  },
  size: {
    "128gb": 50,
    "256gb": 100,
    "512gb": 150,
    "1tb": 200,
  },
};

var colorInputs = document.querySelectorAll('input[name="color"]');
var sizeInputs = document.querySelectorAll('input[name="size"]');
var priceDisplay = document.getElementById("price");

colorInputs.forEach(function (input) {
  input.addEventListener("change", updatePrice);
});

sizeInputs.forEach(function (input) {
  input.addEventListener("change", updatePrice);
});

function updatePrice() {
  var colorInputChecked = document.querySelector('input[name="color"]:checked');
  var sizeInputChecked = document.querySelector('input[name="size"]:checked');
  var colorPrice = colorInputChecked
    ? prices.color[colorInputChecked.value]
    : 0;
  var sizePrice = sizeInputChecked ? prices.size[sizeInputChecked.value] : 0;
  priceDisplay.textContent = colorPrice + sizePrice;
}
