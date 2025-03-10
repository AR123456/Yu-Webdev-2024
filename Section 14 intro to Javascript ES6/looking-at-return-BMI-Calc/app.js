// BMI calculator

// let weight = 65;
// let height = 1.8;

const calcBMI = (weight, height) => {
  return Math.floor(weight / (height * height));
};
const bmi = calcBMI(65, 1.8);
console.log(bmi);
