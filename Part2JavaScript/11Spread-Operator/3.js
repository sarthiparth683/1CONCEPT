// In the example below the var abc and contains 3 values each. the var def and contains 3 values each.The spread operator basically lays out the entire array into seperate elements. alpha contains 6 elements. 

var abc = ['a', 'b', 'c'];
var def = ['d', 'e', 'f'];
var alpha1 = [...abc, ...def];
var alpha2 = {...abc, ...def};
// console.log(...abc);
// console.log(...def);
// console.log(alpha1);
console.log(alpha2);


