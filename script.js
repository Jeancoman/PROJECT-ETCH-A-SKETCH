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
    const styledSquare = document.querySelectorAll(".square");
    styledSquare.forEach((element) => {
      switch (true) {
        case event == 1:
          element.style.cssText = "height: 550px; width: 550px";
          break;
        case event == 2:
          element.style.cssText = "height: 274px; width: 274px";
          break;
        case event == 3:
          element.style.cssText = "height: 182px; width: 182px";
          break;
        case event == 4:
          element.style.cssText = "height: 136px; width: 136px";
          break;
        case event == 5:
          element.style.cssText = "height: 108px; width: 108px";
          break;
        case event == 6:
          element.style.cssText = "height: 90px; width: 90px";
          break;
        case event == 7:
          element.style.cssText = "height: 77px; width: 77px";
          break;
        case event == 8:
          element.style.cssText = "height: 67px; width: 67px";
          break;
        case event == 9:
          element.style.cssText = "height: 59px; width: 59px";
          break;
        case event == 10:
          element.style.cssText = "height: 53px; width: 53px";
          break;
        case event == 11:
          element.style.cssText = "height: 48px; width: 48px";
          break;
        case event == 12:
          element.style.cssText = "height: 43px; width: 43px";
          break;
        case event == 13:
          element.style.cssText = "height: 40px; width: 40px";
          break;
        case event == 14:
          element.style.cssText = "height: 37px; width: 37px";
          break;
        case event == 15:
          element.style.cssText = "height: 33.5px; width: 33.5px";
          break;
        case event == 16:
          element.style.cssText = "height: 31.5px; width: 31.5px";
          break;
        case event == 17:
          element.style.cssText = "height: 29.5px; width: 29.5px";
          break;
        case event == 18:
          element.style.cssText = "height: 28px; width: 28px";
          break;
        case event == 19:
          element.style.cssText = "height: 26px; width: 26px";
          break;
        case event == 20:
          element.style.cssText = "height: 25px; width: 25px";
          break;
        case event == 21:
          element.style.cssText = "height: 24px; width: 24px";
          break;
        case event == 22:
          element.style.cssText = "height: 23px; width: 23px";
          break;
        case event == 23:
          element.style.cssText = "height: 22px; width: 22px";
          break;
        case event == 24:
          element.style.cssText = "height: 21px; width: 21px";
          break;
        case event == 25:
          element.style.cssText = "height: 20px; width: 20px";
          break;
        case event == 26:
          element.style.cssText = "height: 19px; width: 19px";
          break;
        case event == 27:
          element.style.cssText = "height: 18px; width: 18px";
          break;
        case event == 28:
          element.style.cssText = "height: 17px; width: 17px";
          break;
        case event == 29:
          element.style.cssText = "height: 16.5px; width: 16.5px";
          break;
        case event == 30:
          element.style.cssText = "height: 16px; width: 16px";
          break;
        case event == 31:
          element.style.cssText = "height: 15.5px; width: 15.5px";
          break;
        case event == 32:
          element.style.cssText = "height: 15px; width: 15px";
          break;
        case event == 33:
          element.style.cssText = "height: 14.5px; width: 14.5px";
          break;
        case event == 34:
          element.style.cssText = "height: 14px; width: 14px";
          break;
        case event == 35:
          element.style.cssText = "height: 13.5px; width: 13.5px";
          break;
        case event == 36:
          element.style.cssText = "height: 13px; width: 13px";
          break;
        case event == 37:
          element.style.cssText = "height: 12.5px; width: 12.5px";
          break;
        case event == 38:
          element.style.cssText = "height: 12px; width: 12px";
          break;
        case event == 39:
          element.style.cssText = "height: 11.8px; width: 11.8px";
          break;
        case event == 40:
          element.style.cssText = "height: 11.6px; width: 11.6px";
          break;
        case event == 41:
          element.style.cssText = "height: 11.4px; width: 11.4px";
          break;
        case event == 42:
          element.style.cssText = "height: 11.2px; width: 11.2px";
          break;
        case event == 43:
          element.style.cssText = "height: 10.8px; width: 10.8px";
          break;
        case event == 44:
          element.style.cssText = "height: 10.4px; width: 10.4px";
          break;
        case event == 45:
          element.style.cssText = "height: 10.2px; width: 10.2px";
          break;
        case event == 46:
          element.style.cssText = "height: 10px; width: 10px";
          break;
        case event == 47:
          element.style.cssText = "height: 9.7px; width: 9.7px";
          break;
        case event == 48:
          element.style.cssText = "height: 9.4px; width: 9.4px";
          break;
        case event == 49:
          element.style.cssText = "height: 9.2px; width: 9.2px";
          break;
        case event == 50:
          element.style.cssText = "height: 9px; width: 9px";
          break;
        case event == 51:
          element.style.cssText = "height: 8.8px; width: 8.8px";
          break;
        case event == 52:
          element.style.cssText = "height: 8.6px; width: 8.6px";
          break;
        case event == 53:
          element.style.cssText = "height: 8.4px; width: 8.4px";
          break;
        case event == 54:
          element.style.cssText = "height: 8.2px; width: 8.2px";
          break;
        case event == 55:
          element.style.cssText = "height: 8px; width: 8px";
          break;
        case event == 56:
          element.style.cssText = "height: 7.8px; width: 7.8px";
          break;
        case event == 57:
          element.style.cssText = "height: 7.6px; width: 7.6px";
          break;
        case event == 58:
          element.style.cssText = "height: 7.4px; width: 7.4px";
          break;
        case event == 59:
          element.style.cssText = "height: 7.2px; width: 7.2px";
          break;
        case event == 60:
          element.style.cssText = "height: 7px; width: 7px";
          break;
        case event == 61:
          element.style.cssText = "height: 6.9px; width: 6.9px";
          break;
        case event == 62:
          element.style.cssText = "height: 6.7px; width: 6.7px";
          break;
        case event == 63:
          element.style.cssText = "height: 6.6px; width: 6.6px";
          break;
        case event == 64:
          element.style.cssText = "height: 6.5px; width: 6.5px";
          break;
      }
      element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "black";
      });
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
