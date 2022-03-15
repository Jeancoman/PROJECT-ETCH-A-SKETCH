let timesClicked = 0;

function createGrid(event) {
  timesClicked++;

  if (timesClicked > 1) {
    const removed = document.querySelectorAll(".square");
    removed.forEach((element) => element.remove());
    return (timesClicked = 0);
  }

  event = prompt("Type a number between 1 and 64:");

  if (event > 64) {
    alert("You can only type a number between 1 and 64.");
    return (timesClicked = 0);
  }
  for (let i = 0; i < event; i++) {
    for (let i = 0; i < event; i++) {
      const square = document.createElement("div");
      square.classList.toggle("square");
      const container = document.getElementById("container");
      container.appendChild(square);
    }
    document.querySelectorAll(".square").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "black";
      });
    });
    document.querySelectorAll(".square").forEach((element) => {
      element.style.cssText = `height: ${(550/event)-2}px; width: ${(550/event)-2}px`; 
    });
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
