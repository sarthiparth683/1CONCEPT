// Use of Return 
function add(a,b)
{
  var sum = a+b;
  return sum;
}

function square(x)
{
  var y = x*x;
  return y;
}

var a = 5;
var b=15;

var sum = add(a,b);
console.log(sum);
var sqr = square(sum);
console.log(sqr);