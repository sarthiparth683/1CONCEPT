// The example below shows how the arguments after the first is combined into an array. 
function f(x, ...y) {
    // y is an Array
    return x * y.length;
  }
  f(3, "hello", true) == 6
  
  