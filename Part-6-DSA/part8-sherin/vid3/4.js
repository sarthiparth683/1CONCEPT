// Prime Numbers
var pr = prompt("Find Prime Number ?");
if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      var primeHai = true;
      for (var i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          primeHai = false;
          break;
        }
      }
      console.log(primeHai);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}
