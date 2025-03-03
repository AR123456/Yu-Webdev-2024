// this is an array like node list
let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", () => {
    drumButtons[i].style.color = "white";

    switch (drumButtons[i].innerHTML) {
      case "w":
        new Audio("./sounds/crash.mp3").play();
        break;

      case "a":
        new Audio("./sounds/kick-bass.mp3").play();
        break;

      case "s":
        new Audio("./sounds/crash.mp3").play();
        break;

      case "d":
        new Audio("./sounds/tom-1.mp3").play();
        break;

      case "j":
        new Audio("./sounds/tom-2.mp3").play();
        break;

      case "k":
        new Audio("./sounds/tom-3.mp3").play();
        break;

      case "l":
        new Audio("./sounds/tom-4.mp3").play();
        break;

      default:
        break;
    }
  });
}
