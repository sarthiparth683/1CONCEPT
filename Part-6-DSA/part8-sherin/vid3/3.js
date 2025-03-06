// Factors of n Natural numbers
// Factors means number which divede the x number without any remainder
var pr = prompt("find all the facotrs of  ?");
if (pr === null) {
  console.log("cancelled");
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      for (var i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          console.log(i);
        }
      }
      console.log(n);
    } else {
      console.log("should be +ve and more than 0");
    }
  }
}
