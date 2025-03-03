// this is an array like node list
let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", () => {
    new Audio("./sounds/crash.mp3").play();
  });
}
