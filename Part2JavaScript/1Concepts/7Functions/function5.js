// Checking whether a number is even or not
function checkEven(n)
{
  if(n%2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

var n = 6;
var z = checkEven(n);

if(z == true)
{
  console.log(n,"is even");
}