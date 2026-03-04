function isPrime(inputNumber) {
  let result = true;
  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(13));
// =====================================================
function prime2(num) {
  let flag = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

console.log(prime2(2));
console.log(prime2(3));
console.log(prime2(4));
console.log(prime2(5));
console.log(prime2(6));
console.log(prime2(7));
console.log(prime2(11));
console.log(prime2(13));
console.log(prime2(14));
console.log(prime2(15));
// ==============================================================
