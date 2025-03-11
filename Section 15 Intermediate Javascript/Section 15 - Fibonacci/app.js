//  every number is the sum of the 2 previous

function fibonacciGenerator(n) {
  // n is number of items in sequence  so 3 would be [0,1,1]
  // fibonacci for this code starts at 1
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n == 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
