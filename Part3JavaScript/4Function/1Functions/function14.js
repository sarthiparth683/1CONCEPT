// Write a function to replace spaces in a given string with -

function modifyString(str)
{
  var output = "";

  for(var i = 0; i<str.length; i++)
  {
    if(str[i] == " ")
    {
      output = output+"-";
    }
    else
    {
      output = str;
    }
  }

  return output;
}

var str = "Masai School";
console.log(modifyString(str));