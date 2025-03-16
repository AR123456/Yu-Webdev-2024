// function to generate a random number

// generate 2 random numbers identify player one and player 2

// compare the 2 numbers
// larger wins if equal draw

// display values of dice roll for player one and two in dom

// create display of the six dot pattern
// draw the dots based on the value
// display player ___ wins in div  over both dice
window.addEventListener("load", () => {
  const player1 = document.querySelector(".player-1");
  const player2 = document.querySelector(".player-2");
  const roll = () => {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    console.log(dice1, dice2);
  };
  roll();
});
