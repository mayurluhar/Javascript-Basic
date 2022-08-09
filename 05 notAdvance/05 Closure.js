function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(5);

console.log("LINE 9:", add5(3));

console.log("LINE 11:", doAddition(5)(4));
