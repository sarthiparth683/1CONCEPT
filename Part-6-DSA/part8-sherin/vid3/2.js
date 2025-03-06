// Factorial of n Natural numbers
// 5!=5×4×3×2×1=120  -   product of all positive integers
var pr = prompt("kaha tak add karnan hi ?");
if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      var fact = 1;
      for (var i = 1; i <= n; i++) {
        fact = fact * i;
      }
      console.log(fact);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}
