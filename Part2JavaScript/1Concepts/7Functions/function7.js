// sumOfN : Find sum from 1 to n
// multiplyBy2 : multiple the value by 2

function sumOfN(n)
{
  sum = 0;
  for(i=1; i<=n; i++)
  {
    sum = sum + i;
  }
  console.log("Sum is ",sum);
  
  return sum;
}

function multiplyBy2(x)
{
  var output2 = x*2;
  console.log(output2);
}

var n = 5;
var output = sumOfN(n);
multiplyBy2(output);