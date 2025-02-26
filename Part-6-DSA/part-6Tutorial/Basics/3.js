// ### Question 3: Count the number of digits of a number

function countDigits(num) {
  num = Math.abs(num); // to tackel negative no also
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10

console.log(Math.abs(-78));
