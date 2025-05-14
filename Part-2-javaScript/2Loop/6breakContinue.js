for (let num = 1; num <= 10; num++) {
  if (num === 5) {
    break; // it wont run after 5;
  }
  console.log(num);
}
//--------------------------------------------------------------

for (let num = 1; num <= 10; num++) {
  if (num === 5) {
    continue; // it will skip 5;
  }
  console.log(num);
}
