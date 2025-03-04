// sum of n Natural numbers

var n = Number(prompt("kaha tak add karnan hi ?"));
if (isNaN(n)) {
  console.log("Invalid input");
} else {
  if (n > 0) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum = sum + i;
    }
    console.log(sum);
  } else {
    console.log("should be +ve and more than 0");
  }
}
