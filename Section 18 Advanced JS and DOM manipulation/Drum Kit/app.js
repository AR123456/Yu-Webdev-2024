// this is an array like node list
let drumButtons = document.querySelectorAll(".drum");
// button press
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", () => {
    makeSound(drumButtons[i].innerHTML);
    whenPressed(drumButtons[i].innerHTML);
  });
}
// keyboard input
document.addEventListener("keyup", (e) => {
  makeSound(e.key);
  whenPressed(e.key);
});
function makeSound(key) {
  switch (key) {
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
      console.log(drumButtons[i].innerHTML);
      break;
  }
}
function whenPressed(key) {
  // getting the letter  <button class="w drum">w</button>
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  // add a delay
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
