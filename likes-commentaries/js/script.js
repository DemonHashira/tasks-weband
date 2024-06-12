// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(function () {
  window.onload = function () {
    initializeLikeButton();
    initializeCommentButton();
    postComment();
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

// Function to post a comment
function postComment() {
  var commentButton = document.querySelector(".comment-button");
  commentButton.addEventListener("click", function (event) {
    event.preventDefault();
    var commentInput = document.querySelector(".comment-input");
    var commentsDisplay = document.querySelector(".comments-display");
    var newComment = document.createElement("p");
    newComment.textContent = commentInput.value;
    commentsDisplay.appendChild(newComment);
    commentInput.value = "";
  });
}

// Function to toggle the state of the comment section when the comment button is clicked
function initializeCommentButton() {
  document.querySelector(".comment-section").style.display = "none";
  var commentButton = document.querySelector(".comment-icon-button");
  commentButton.addEventListener("click", function () {
    var commentSection = document.querySelector(".comment-section");
    commentSection.style.display =
      commentSection.style.display === "none" ? "block" : "none";
  });
}
