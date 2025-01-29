function compareThreeNumbers(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  console.log(max);
}
compareThreeNumbers(5, 20, 10);
