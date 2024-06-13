// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(() => {
  window.onload = () => {
    hideAllFields();
    handleTypeChange();
  };
})();

// Function to hide all fields initially
const hideAllFields = () => {
  document.getElementById("invoiceFields").style.display = "none";
  document.getElementById("messageFields").style.display = "none";
  document.getElementById("requestFields").style.display = "none";
  document.getElementById("extractFields").style.display = "none";
};

const handleTypeChange = () => {
  // Get the selected element
  const typeSelect = document.getElementById("type");

  // Add event listener for the 'change' event
  typeSelect.addEventListener("change", function () {
    // Hide all the additional fields by default
    hideAllFields();

    // Get the element corresponding to the selected option
    const selectedField = document.getElementById(this.value + "Fields");

    // Display the selected field
    if (selectedField) {
      selectedField.style.display = "block";
    }
  });
};
