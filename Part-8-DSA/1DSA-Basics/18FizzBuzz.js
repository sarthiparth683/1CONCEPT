function fizzBuzz(inputNumber) {
  if (!Number.isInteger(inputNumber) || inputNumber <= 0) {
    throw new Error("Input must be a positive integer");
  }

  let arr = [];

  for (let i = 1; i <= inputNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(10));
// console.log(fizzBuzz(-9));
console.log(fizzBuzz(25));
console.log(fizzBuzz(8));
//------------------------ 
console.log(Number(true))
console.log(Number(false))
console.log(typeof "uai")
console.log(typeof Number("77"))
console.log(Number.isInteger(89)); // Output: true
// console.log(isInteger(89))
// ===============================================================