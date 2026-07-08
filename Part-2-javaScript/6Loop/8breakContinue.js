// break : Exit loop completely
// continue : Skip current iteration and move to next
//--------------------------------------------------------------
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break; // it wont run after 5;
  }
  console.log(i);
}
//--------------------------------------------------------------
for (let num = 1; num <= 10; num++) {
  console.log(num);
  if (num === 5) {
    continue; // it will skip 5;
  }
  console.log(num);
}
// =============================================================
