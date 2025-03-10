//  formula for BMI
let kg = 69.98;
let meters = 1.778;

const BMI = kg / (meters * meters);

console.log(BMI);

if (BMI < 18) {
  console.log(`Your BMI is ${BMI} so you are under weight.`);
}
if (BMI > 18.5 && BMI <= 24.9) {
  console.log(`Your BMI is ${BMI} so you are normal weight.`);
} else {
  console.log(`Your BMI is ${BMI} so you are over weight.`);
}
