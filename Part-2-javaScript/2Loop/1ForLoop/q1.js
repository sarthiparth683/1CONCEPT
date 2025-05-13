// Loop 1 to 5
function loop1to5() {
  console.log("Assending");
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  console.log("Descending");
  for (let i = 5; i >= 1; i--) {
    console.log(i);
  }
}

loop1to5();
//------------------------------------------------------------------
// Multiplication Table of 2
function multiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    // let a = " 2 x " + i + " = " + i * 2;
    // let b = " 5 x " + i + " = " + i * 5;
    let c = " 17 x " + i + " = " + i * 17;
    // console.log(a);
    // console.log(b);
    console.log(c);
  }
}
multiplicationTable();