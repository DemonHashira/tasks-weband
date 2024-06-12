// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function () {
  window.onload = function () {
    initializeLikeButton();
    initializeCommentButton();
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

function initializeCommentButton() {
  document.querySelector(".comment-section").style.display = "none";
  var commentButton = document.querySelector(".comment-icon-button");
  commentButton.addEventListener("click", function () {
    var commentSection = document.querySelector(".comment-section");
    commentSection.style.display =
      commentSection.style.display === "none" ? "block" : "none";
  });
}
