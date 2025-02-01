// ### Question 2: Sum of digits of a number

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10; // to get remainder modulas is used
    num = Math.floor(num / 10); // to get integer value
  }
  return sum;
}

console.log(sumOfDigits(1287)); // 18
