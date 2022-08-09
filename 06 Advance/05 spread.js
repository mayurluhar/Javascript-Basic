function sumOne(a, b) {
  return a + b;
}

var myAge = [3, 3]; //spread Op

//console.log(sumOne(...myAge));

//REST Op
function sunTwo(a, b, ...args) {
  console.log(args);
  const multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return `sum is: ${sum}, multi is: ${multi}`;
}

console.log(sunTwo(2, 3, 1, 6, 1));
