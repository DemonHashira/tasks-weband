// I decided to switch to arrow functions, const and let because of modern practices and readability for this task.
(() => {
  // Prices for the different colors and sizes
  const prices = {
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

  // Initialize variables
  let colorInputs;
  let sizeInputs;
  let priceDisplay;

  // Initialize the script
  window.onload = () => {
    colorInputs = document.querySelectorAll('input[name="color"]');
    sizeInputs = document.querySelectorAll('input[name="size"]');
    priceDisplay = document.getElementById("price");

    const update = () => {
      updatePrice();
      updateImage();
    };

    colorInputs.forEach((input) => input.addEventListener("change", update));
    sizeInputs.forEach((input) => input.addEventListener("change", update));

    update();
  };

  // Update the price display based on the selected color and size
  const updatePrice = () => {
    const colorInputChecked = document.querySelector(
      'input[name="color"]:checked'
    );
    const sizeInputChecked = document.querySelector(
      'input[name="size"]:checked'
    );

    if (colorInputChecked && sizeInputChecked) {
      const colorPrice = prices.color[colorInputChecked.value];
      const sizePrice = prices.size[sizeInputChecked.value];
      priceDisplay.textContent = `Total Price: $${colorPrice + sizePrice}`;
    } else {
      priceDisplay.textContent = "";
    }
  };

  // Update the product image based on the selected color
  const updateImage = () => {
    const colorInputChecked = document.querySelector(
      'input[name="color"]:checked'
    );
    if (colorInputChecked) {
      const color = colorInputChecked.value;
      const productImage = document.getElementById("product-image");
      productImage.src = `assets/images/14ProMax${capitalizeFirstLetter(
        color
      )}.jpeg`;
    }
  };

  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
})();
