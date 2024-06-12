// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function () {
  window.onload = function () {
    hideAllFields();
    handleTypeChange();
  };
})();

document.querySelector(".like-icon").addEventListener("click", function () {
  this.classList.toggle("liked");
});

document
  .getElementById("comment-button")
  .addEventListener("click", function () {
    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value.trim();
    if (commentText) {
      var commentElement = document.createElement("p");
      commentElement.textContent = commentText;
      document.getElementById("comments").appendChild(commentElement);
      commentInput.value = "";
    }
  });
