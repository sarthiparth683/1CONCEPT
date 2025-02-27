// swaping
let a = 10;
let b = 20;

// method - I
// c = a;
// a = b;
// b = c;
// console.log(a)
// console.log(b)

// method - II
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

// method - III - array destructuring
[a, b] = [b, a];
// [a, b] = [98, 77];
console.log(a);
console.log(b);
