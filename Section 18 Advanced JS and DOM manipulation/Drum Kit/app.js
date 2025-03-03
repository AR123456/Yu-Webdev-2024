// this is an array like node list
let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", () => {
    drumButtons[i].style.color = "white";
    if (drumButtons[i].innerHTML == "w") {
      new Audio("./sounds/crash.mp3").play();
    }
    if (drumButtons[i].innerHTML == "a") {
      new Audio("./sounds/kick-bass.mp3").play();
    }
    if (drumButtons[i].innerHTML == "s") {
      new Audio("./sounds/snare.mp3").play();
    }
    if (drumButtons[i].innerHTML == "d") {
      new Audio("./sounds/tom-1.mp3").play();
    }
    if (drumButtons[i].innerHTML == "j") {
      new Audio("./sounds/tom-2.mp3").play();
    }
    if (drumButtons[i].innerHTML == "k") {
      new Audio("./sounds/tom-3.mp3").play();
    }
    if (drumButtons[i].innerHTML == "l") {
      new Audio("./sounds/tom-4.mp3").play();
    }
  });
}
