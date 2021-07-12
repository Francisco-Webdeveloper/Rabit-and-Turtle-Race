// end game and start a new one
const endGame = (animal) => {
  // alert the game is over and which animal is the winner
  setTimeout(() => { alert(`${animal} is the Winner!!`); }, 10);
  // reload the page and start a new game
  setTimeout(() => { window.location.reload(); }, 500);
};

// move the animal
const animalMove = (animal) => {
  // find the current TD
  const currentTd = document.querySelector(`#${animal} .active`);
  // find the next TD
  const nextTd = currentTd.nextElementSibling;
  // remove class active to the currentTd
  currentTd.classList.remove("active");
  // add class active to the nextTd
  nextTd.classList.add("active");
  // if nextTd is the last one, end the game!
  if (nextTd.classList.contains("finish-line")) {
    nextTd.classList.remove("finish-line");
    endGame(animal);
  }
};

// move the animal when user presses a key
document.addEventListener("keyup", (event) => {
  if (event.key === "r" || event.key === "R") {
    animalMove("rabbit");
  }
  if (event.key === "t" || event.key === "T") {
    animalMove("turtle");
  }
});
