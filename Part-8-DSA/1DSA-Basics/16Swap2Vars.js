let a = 5;
let b = 6;
a = a + b; // 11
b = a - b; // 11 - 6 = 5
a = a - b; // 11 - 5 = 6

console.log(`Value after swapping a=${a} and b=${b}`);
// =============================================================================
function swap(a, b) {
  let c = a;
  a = b;
  b = c;
  return { a, b };
}

console.log(swap(4, 5));
console.log(swap(8, 9));
// ==============================================================================
function swap2(a, b) {
  [a, b] = [b, a];
  return { a, b };
}

console.log(swap2(4, 5));
console.log(swap2(8, 9));
// ===============================================================================
