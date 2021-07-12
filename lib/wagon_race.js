

const animalMove = (animal) => {
  // find the current TD
  const currentTd = document.querySelector("#rabbit .active");
  // find the next TD
  const nextTd = currentTd.nextElementSibling;
  // remove class active to the currentTd
  currentTd.classList.remove("active");
  // add class active to the nextTd
  nextTd.classList.add("active");
}





