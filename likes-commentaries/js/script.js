// Immediately Invoked Function Expression (IIFE) to avoid polluting the global namespace
(() => {
  window.onload = () => {
    initializeLikeButton();
    initializeCommentButton();
    postComment();
  };
})();

// Function to toggle the state when the like button is clicked
const initializeLikeButton = () => {
  const likeButton = document.querySelector(".like-button");
  likeButton.addEventListener("click", function () {
    const icon = this.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
    icon.classList.toggle("liked");
  });
};

// Function to post a comment
const postComment = () => {
  const commentButton = document.querySelector(".comment-button");
  commentButton.addEventListener("click", (event) => {
    event.preventDefault();
    const commentInput = document.querySelector(".comment-input");
    const commentsDisplay = document.querySelector(".comments-display");
    const newComment = document.createElement("p");
    newComment.textContent = commentInput.value;
    commentsDisplay.appendChild(newComment);
    commentInput.value = "";
  });
};

// Function to toggle the state of the comment section when the comment button is clicked
const initializeCommentButton = () => {
  const commentSection = document.querySelector(".comment-section");
  commentSection.style.display = "none";
  const commentButton = document.querySelector(".comment-icon-button");
  commentButton.addEventListener("click", () => {
    commentSection.style.display =
      commentSection.style.display === "none" ? "block" : "none";
  });
};
