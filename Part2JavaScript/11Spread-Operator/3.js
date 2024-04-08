// In the example below the var abc and contains 3 values each. the var def and contains 3 values each.The spread operator basically lays out the entire array into seperate elements. alpha contains 6 elements. 

var abc = ['a', 'b', 'c'];
var def = ['d', 'e', 'f'];
var alpha = [ ...abc, ...def ];
console.log(alpha)// alpha == ['a', 'b', 'c', 'd', 'e', 'f'];

