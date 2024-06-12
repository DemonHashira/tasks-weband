// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function () {
  window.onload = function () {
    initializeLikeButton();
  };
})();

// Function to toggle the state when the like button is clicked
function initializeLikeButton() {
  var likeButton = document.querySelector(".like-button");
  likeButton.addEventListener("click", function () {
    var icon = this.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    icon.classList.toggle("liked");
  });
}
