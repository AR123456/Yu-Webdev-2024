// BMI calculator

// milk
function getMilk(money) {
  console.log(`buy ${calcBottles(money, 1.5)} bottles of milk`);
  // console.log(`buy ${calcBottles(money, 1.5)} bottles of milk`);
  // return money % 1.5;
  return calcChange(money, 1.5);
}
function calcBottles(startingMoney, costPerBottle) {
  let numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  let change = startingAmount % costPerBottle;

  return change;
}

getMilk(5);
console.log(getMilk(5));
