// Passing Value + Returning Value
function subtraction(x, y)
{
  var subtraction = x - y;

  return subtraction;
}

function division(e, c)
{
  var division = e/c;

	return division;
}

function modulus(t, q)
{
  var val = t%q;

	return val;
}

function addition(first,second)
{
  var third = 20;
  var sum = first+second+third;

  return sum;
}

var a=2;
var b=30;

var output_1 = addition(a, b);
console.log("Addition",output_1);

var output_2 = subtraction(a, b);
console.log("Subtraction",output_2);

var output_3 = division(a, b);
console.log("Division",output_3);

var output_4 = modulus(a, b);
console.log("Modulus",output_4);