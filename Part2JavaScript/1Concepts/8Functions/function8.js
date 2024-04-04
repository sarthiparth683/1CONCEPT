// findSum : Find Sum of two numbers
// findSquare : Square of a number

function findSum(a,b)
{
  var sum ;
  sum = a+b;
  return sum;
}

function findsquare(x)
{
  var val;
  val = x*x;
  console.log("val is",val);
}

var a = 4;
var b = 5;
var z = findSum(a,b);
console.log("z is ",z);
findsquare(z);