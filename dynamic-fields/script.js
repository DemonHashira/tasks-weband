// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function () {
  window.onload = function () {
    hideAllFields();
    handleTypeChange();
  };
})();

// Function to hide all fields initially
function hideAllFields() {
  document.getElementById("invoiceFields").style.display = "none";
  document.getElementById("messageFields").style.display = "none";
  document.getElementById("requestFields").style.display = "none";
  document.getElementById("extractFields").style.display = "none";
}

function handleTypeChange() {
  // Get the selected element
  var typeSelect = document.getElementById("type");

  // Add event listener for the 'change' event
  typeSelect.addEventListener("change", function () {
    // Hide all the additional fields by default
    hideAllFields();

    // Check the value of the selected option
    if (this.value === "invoice") {
      document.getElementById("invoiceFields").style.display = "block";
    } else if (this.value === "message") {
      document.getElementById("messageFields").style.display = "block";
    } else if (this.value === "request") {
      document.getElementById("requestFields").style.display = "block";
    } else if (this.value === "extract") {
      document.getElementById("extractFields").style.display = "block";
    }
  });
}
