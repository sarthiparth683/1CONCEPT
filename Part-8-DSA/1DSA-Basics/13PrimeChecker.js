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

// console.log("97", isPrime2(97));
// console.log("5", isPrime2(5));
// console.log("4", isPrime2(4));
// console.log("2", isPrime2(2));
// ======================================================================
function isPrime2(inputNumber) {
  let result = true;
  if (inputNumber === 2) {
    result = true;
  } else if (inputNumber % 2 === 0) {
    result = false;
  }

  if (result === true) {
    for (let i = 3; i < inputNumber; i = i + 2) {
      if (inputNumber % i === 0) {
        result = false;
        break;
      }
    }
  }

  return result;
}

// console.log("5", isPrime(5));
// console.log("4", isPrime(4));
// console.log("97", isPrime(97));
// console.log("2", isPrime(2));
// ===================================================
function prime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  console.log(flag);
}

// prime(5);
// prime(8);
// prime(7);
// prime(15);
// prime(13);
// ===========================================================
function prime2(num) {
  let flag = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  console.log(flag);
}

// prime2(5);
// prime2(8);
// prime2(7);
// prime2(15);
// prime2(13);
// ==============================================================