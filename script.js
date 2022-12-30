const smallCup = document.querySelectorAll(".cup-small"),
  liters = document.getElementById("liters"),
  percentage = document.getElementById("percentage"),
  remained = document.getElementById("remained");

updateBigCup();

smallCup.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  if (index === 7 && smallCup[index].classList.contains("full")) index--;
  else if (
    smallCup[index].classList.contains("full") &&
    !smallCup[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCup.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCup.length;

  if (fullCups === 0) {
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
