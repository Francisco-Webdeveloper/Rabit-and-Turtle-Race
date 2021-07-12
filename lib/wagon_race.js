
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
}

// move the animal when user presses a key
document.addEventListener("keyup", (event) => {
  if (event.key === "r" || event.key === "R") {
    animalMove("rabbit");
  }
  if (event.key === "t" || event.key === "T") {
    animalMove("turtle");
  }
})



