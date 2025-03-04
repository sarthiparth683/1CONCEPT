// Prime Numbers - Method -II
var pr = prompt("input any Number  ?");
if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      console.log(isPrime(n));
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
   
  }
  return true;
}
