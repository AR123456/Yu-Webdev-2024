// leap year

function isLeap(year) {
  if (year % 4 === 0) {
    // may be a leap year
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("leap year");
        return;
      } else {
        console.log("not a leap year");
        return;
      }
    } else {
      console.log("leap year");
      return;
    }
  }
  console.log("not a leap year");
  return;
}

isLeap(2400);
