// for loop
// while loop
// do while loop
// for of loop
// for in loop
// for-in is for objects, not arrays (may cause issues with unexpected keys)
// forEach can't use break or continue
// while and do-while work best when number of iterations is unknown
// Loops = data processor.
// Use the right loop for the job:
// for = best for numbers/indexes
// for-of = for array values
// for-in = for object keys
// while = for unpredictable conditions
//================================================================
console.log("Assending");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Descending");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
//--------------------------------------------------------------
// Multiplication Table

function multiplicationTable(num) {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    let res = `${num} x ${i} = ${num * i}`;
    arr.push(res);
  }
  return arr;
}

console.log(multiplicationTable(8));
console.log(multiplicationTable(9));
//--------------------------------------------------------------
