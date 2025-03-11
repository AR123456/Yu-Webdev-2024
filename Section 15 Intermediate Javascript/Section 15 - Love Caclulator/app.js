// const randomNum = Math.random();
// console.log(Math.floor(randomNum * 6) + 1);

// or
// const randNum = Math.floor(Math.random() * 6 + 1);
// console.log(randNum);
prompt("Name One");
prompt("Name two ");
const randPercent = () => {
  let randOne = Math.floor(Math.random() * 100 + 1);
  alert(`Your love percent is ${randOne}`);
};

randPercent();
