let i = 99;
function beer() {
  while (i > 0 && i < 100) {
    console.log(
      `${i} bottles of beer on the wall,${i} bottles of beer. Take one down pass it around`
    );
    i--;
  }
  console.log(`No more beer on the wall go to the store `);
}
