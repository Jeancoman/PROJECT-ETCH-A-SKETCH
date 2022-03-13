function createGrid(event) {
  event = prompt("Input number: ");
  for (let i = 0; i < event; i++) {
    for (let i = 0; i < event; i++) {
      const square = document.createElement("div");
      square.classList.toggle("square");
      const container = document.getElementById("container");
      container.appendChild(square);
    }
    const newLine = document.createElement("span");
    newLine.classList.toggle("line-break");
    const container = document.getElementById("container");
    container.appendChild(newLine);
  }
}

const btn = document.getElementById("btn");
btn.addEventListener("mouseenter", () => {
  btn.style.borderColor = "black";
});
btn.addEventListener("mouseleave", () => {
  btn.style.cssText = "border-color: #ddd";
});
