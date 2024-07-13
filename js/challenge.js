const counterElement = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likesList = document.querySelector(".likes");
const commentsDiv = document.getElementById("list");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");

let counter = 0;
let isPaused = false;
let timerInterval;

function updateCounter() {
  if (!isPaused) {
    counter++;
    counterElement.textContent = counter;
  }
}

function incrementCounter() {
  counter++;
  counterElement.textContent = counter;
}

function decrementCounter() {
  if (counter > 0) {
    counter--;
    counterElement.textContent = counter;
  }
}

function likeCounter() {
  const likeItem = document.createElement("li");
  likeItem.textContent = `Liked: ${counter}`;
  likesList.appendChild(likeItem);
}

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    pauseButton.textContent = "resume";
    clearInterval(timerInterval);
  } else {
    pauseButton.textContent = "pause";
    timerInterval = setInterval(updateCounter, 1000);
  }
}

function addComment(event) {
  event.preventDefault();
  const comment = commentInput.value;
  const commentParagraph = document.createElement("p");
  commentParagraph.textContent = comment;
  commentsDiv.appendChild(commentParagraph);
  commentInput.value = "";
}

minusButton.addEventListener("click", decrementCounter);
plusButton.addEventListener("click", incrementCounter);
heartButton.addEventListener("click", likeCounter);
pauseButton.addEventListener("click", togglePause);
commentForm.addEventListener("submit", addComment);

timerInterval = setInterval(updateCounter, 1000);
