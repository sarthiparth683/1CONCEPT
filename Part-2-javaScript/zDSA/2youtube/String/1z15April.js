// let str = "kjabuyagei";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//     count += 1;
//   }
// }
// if (count === 0) {
//   console.log("No vowels found");
// } else {
//   console.log(count);
// }
//---------------------------------------------------------------------

//Palindrome
// let str = "naman";
// let bag = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   bag += str[i];
// }
// if (str === bag) {
//   console.log("true");
// } else {
//   console.log("false");
// }
//------------------------------------------------------------------
// Two Pointer
//Palindrome

// let str="madam";
// let i=0;
// let j=str.length-1;
// while(i<j){
//     if(str[i]!=str[j]){
//         console.log("Not a palindrome");
//     }
//     i++;
//     j--;
// }
// console.log("It is a palindrome");
//------------------------------------------------------------------------

// let arr = [3, 4, 2, 6, 5, 3, 1, 0];
// let sumOfOdd = 0;
// let sumOfEven = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sumOfEven += arr[i];
//   } else {
//     sumOfOdd += arr[i];
//   }
// }

// if (sumOfOdd < sumOfEven) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }
//-----------------------------------------------------------

// const oddOverEven = (arr) => {
//   let oddSum = 0;
//   let evenSum = 0;
//   for (let i of arr) {
//     if (i % 2 == 0) {
//       evenSum += i;
//     } else {
//       oddSum += i;
//     }
//   }

//   if (oddSum > evenSum) console.log("Odd");
//   else console.log("Even");
// };
// let arr = [1, 2, 3, 4, 5, 6];
// oddOverEven(arr);

//---------------------------------------------------------------------

// let str = "i am doing some thing";
// let arr = str.split(" ");
// console.log(arr);
// console.log(arr[1]);
// let bag = "";
// for (let i = arr.length - 1; i >= 0; i--) {
//   bag += arr[i] + " ";
// }
// console.log(bag.trim());
//-------------------------------------------------------------------
