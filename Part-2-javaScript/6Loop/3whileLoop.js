// While Loop concept - Condition is checked before running

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}

console.log(sum);
//-------------------------------------------
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
  console.log(count);
}
//--------------------------------------------
let a = 5;
let j = 0;
while (j <= 5) {
  a += 5;
  j++;
}

console.log(a);
// ===========================================

// 1. Counting Down (Launch Sequence)
// Write a program that starts at 10 and prints the numbers down to 1. After it finishes, print "Liftoff!".
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
  if (num === 1) {
    console.log("Liftoff");
  }
}

console.log("Liftoff");
// ===============================================
// 2. Sum of Numbers
// Calculate the sum of all integers starting from 1 up to a user-defined number (e.g., 50). Use a while loop to add each number to a running total.
function sum2(num) {
  let sum = 0;
  let i = 1;
  while (i <= num) {
    sum += i;
    i++;
  }
  return sum;
}
console.log(sum2(10));
console.log(sum2(15));
// =================================================
// 3. Even Numbers Filter
// Given a starting number and an ending number (e.g., 1 to 20), use a while loop to print only the even numbers within that range.

function even(num) {
  let i = 1;
  while (i <= num) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}

even(20);
// ===================================================
// 4. Find the First Power of 2Find the first power of 2 that is greater than 1,000. Start with $1$ and multiply by $2$ in each iteration of the while loop until the condition is met.
let power = 1;
while (power <= 1000) {
  power *= 2; // Equivalent to power = power * 2
}
console.log("The first power of 2 greater than 1000 is:", power);
// ====================================================