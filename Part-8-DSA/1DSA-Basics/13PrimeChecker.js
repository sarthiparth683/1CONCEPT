function isPrime(inputNumber) {
  if (inputNumber <= 1) return false;
  if (inputNumber === 2) return true;
  let res = true;

  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      res = false;
      break;
    }
  }

  return res;
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
  if (num <= 1) return false; // handle 0, 1, and negatives
  if (num === 2) return true; // 2 is prime
  let res = true;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      res = false;
      break;
    }
  }

  return res;
}

console.log(prime2(2));
console.log(prime2(3));
console.log(prime2(4));
console.log(prime2(5));
console.log(prime2(6));
console.log(prime2(9));
console.log(prime2(7));
console.log(prime2(11));
console.log(prime2(13));
console.log(prime2(14));
console.log(prime2(15));
// ==============================================================
