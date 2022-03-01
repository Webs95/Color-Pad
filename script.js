const board = document.querySelector("#board");
const squereNumber = 837;
const colors = [
  "red",
  "#28e807",
  "#011942",
  "#0244b4",
  "#012768",
  "#ba4d64",
  "#070304",
  "#3ea805",
  "orange",
  "#ae12ba",
  "#f5a5ba",
  "#4f0854",
  "#430747",
];

for (let i = 0; i < squereNumber; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  box.addEventListener("mouseover", () => setColor(box));

  box.addEventListener("mouseleave", () => removeColor(box));

  board.append(box);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 0 2.5px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = "#167a6f00";
  el.style.boxShadow = "0 0 2px #2feed7";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

