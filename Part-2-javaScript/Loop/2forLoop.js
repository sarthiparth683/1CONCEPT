// Loop 1 to 5
// function loop1to5() {
//   console.log("Assending");
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }

//   console.log("Descending");
//   for (let i = 5; i >= 1; i--) {
//     console.log(i);
//   }
// }

// loop1to5();
//------------------------------------------------------------------
// Multiplication Table of 2
// function multiplicationTable() {
//   for (let i = 1; i <= 10; i++) {
//     // let a = " 2 x " + i + " = " + i * 2;
//     // let b = " 5 x " + i + " = " + i * 5;
//     let c = " 17 x " + i + " = " + i * 17;
//     // console.log(a);
//     // console.log(b);
//     console.log(c);
//   }
// }
// multiplicationTable();
//----------------------------------------------------------------------

// let N = 4;

// for (let i = 1; i <= N; i++) {
//   let bag = "";
//   for (let j = 1; j <= N; j++) {
//     if (i == 1 || i == N) {
//       bag += "* ";
//     } else if (j == 1 || j == N) {
//       bag += "* ";
//     } else {
//       bag += "  ";
//     }
//   }
//   console.log(bag);
// }
// ------------------------------------------------------------------------

// SubStrings - All SubStrings
// let str = "sarthi";
// for (let i = 0; i < str.length; i++) {
//   let bag = "";
//   for (let j = i; j < str.length; j++) {
//     // console.log(i,j)
//     bag += str[j];
//     console.log(bag);
//   }
// }

//----------------------------------------------------------------------------
// SubStrings - exist of not

// let str = "quickbrownfoxjumpsoverthelazydog";
// // let subStr = "high";
// let subStr = "over";
// function check(str, subStr) {
//   let bag = "";
//   for (let i = 0; i < str.length; i++) {
//     bag = "";
//     for (let j = i; j < str.length; j++) {
//       bag += str[j];
//       // console.log(bag)
//       if (bag == subStr) {
//         console.log(true);
//         return;
//       }
//     }
//   }
//   // console.log(false)
//   // return false;
//   return console.log(false);
// }
// check(str, subStr);
//------------------------------------------------------------------
// Prime Number

// let num = 70;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) count++;
// }
// if (count == 2) console.log("Yes");
// else if(count > 2) {
//   console.log(count, "No");
// }
//---------------------
// OR
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     count++;
//   }
// }
// if (count > 2) {
//   console.log("Not Prime");
// } else {
//   console.log("Yes Prime");
// }
