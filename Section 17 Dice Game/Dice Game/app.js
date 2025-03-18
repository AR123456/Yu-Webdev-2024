// function to generate a random number

// generate 2 random numbers identify player one and player 2

// compare the 2 numbers
// larger wins if equal draw

// display values of dice roll for player one and two in dom

// create display of the six dot pattern
// draw the dots based on the value
// display player ___ wins in div  over both dice
window.addEventListener("load", () => {
  // consts
  const diceFaceOne = `<div class="dice one-face">
          <span class="dot"></span>
        </div>`;
  const diceFaceTwo = `<div class="dice two-face">
          <span class="dot"> </span>
          <span class="dot"> </span>
        </div>`;
  const diceFaceThree = `<div class="dice three-face">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>`;
  const diceFaceFour = `<div class="dice four-face">
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>`;
  const diceFaceFive = `<div class="dice five-face">
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>`;
  const diceFaceSix = `<div class="dice six-face">
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span><span class="dot"></span>
          </div>
          <div class="column">
            <span class="dot"></span>
            <span class="dot"></span><span class="dot"></span>
          </div>
        </div>`;
  const player1 = document.querySelector(".player-1");
  const player2 = document.querySelector(".player-2");
  player1.innerHTML = diceFaceSix;
  player2.innerHTML = diceFaceSix;
  const roll = () => {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    // this is very jummpy look for another way to append  page
    // player1.innerHTML = dice1;
    // player2.innerHTML = dice2;
  };
  roll();
});

// window.window onloadeddata, onloadstart
// console.log(window.onbeforeunload);
// https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event

// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   body.innerHTML = `reload`;
// });
