//  create a function that returns the number of days , weeks and months till 90
//
// let age =prompt("What is your age? ");
function lifeInWeeks(age) {
  //   let totalDays = 90 * 365 - age * 365;
  //   let totalWeeks = Math.floor(totalDays / 7);
  //   let totalMonths = Math.floor(totalDays / 28);
  //   You have 10220 days, 1460 weeks, and 365 months left.
  let yearsRemaining = 90 - age;
  let totalDays = yearsRemaining * 365;
  let totalWeeks = yearsRemaining * 52;
  let totalMonths = yearsRemaining * 12;
  // You have 10220 days, 1456 weeks, and 336 months left.
  console.log(
    `You have ${totalDays} days, ${totalWeeks} weeks, and ${totalMonths} months left.`
  );
}

lifeInWeeks(62);
// alert(`You have ${totalDays} days, ${} weeks, and ${} months left.`)
