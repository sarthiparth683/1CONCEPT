// Sorting
// let arr = [25, 8, 4, 49, 2, 4, 43, 9, 16, 64, 81];
// arr.sort((a,b)=>a-b) // Assending order
// arr.sort((a, b) => b - a); // Descending order
// arr.sort((a, b) => (a*a) - (b*b)); // square root soritng
// console.log(arr);
//---------------------------------------------------------------------------------------
// Sort till k value
// let arr = [25, 8, 4, 49, 2, 43, 9, 16, 64, 81];
// let k = 5;
// arr.sort((a, b) => (a % k) - (b % k));
// console.log(arr);
//---------------------------------------------------------------------------------------
// Make Merit list
// function main() {
//   let n = parseInt(prompt());
//   let name = new Array(n);
//   let height = new Array(n);
//   let weight = new Array(n);
//   let iQ = new Array(n);

//   for (let i = 0; i < n; i++) {
//     name[i] = prompt();
//     height[i] = parseInt(prompt());
//     weight[i] = parseInt(prompt());
//     iQ[i] = parseInt(prompt());
//   }

//   solve(name, height, weight, iQ, n);

//   for (let i = 0; i < 8; i++) {
//     console.log(name[i]);
//   }
// }

// function solve(name, height, weight, iQ, n) {
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (check(name[j], name[j + 1])) {
//         swap(j, j + 1, name, height, weight, iQ);
//       }
//     }
//   }

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (weight[j] > weight[j + 1]) {
//         swap(j, j + 1, name, height, weight, iQ);
//       }
//     }
//   }

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (height[j] < height[j + 1]) {
//         swap(j, j + 1, name, height, weight, iQ);
//       }
//     }
//   }

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (iQ[j] < iQ[j + 1]) {
//         swap(j, j + 1, name, height, weight, iQ);
//       }
//     }
//   }
// }

// function check(a, b) {
//   let minLength = Math.min(a.length, b.length);
//   for (let i = 0; i < minLength; i++) {
//     if (a[i] !== b[i]) {
//       return a[i] > b[i];
//     }
//   }
//   return false;
// }

// function swap(i, j, name, height, weight, iQ) {
//   let tempName = name[i];
//   name[i] = name[j];
//   name[j] = tempName;

//   let tempHeight = height[i];
//   height[i] = height[j];
//   height[j] = tempHeight;

//   let tempWeight = weight[i];
//   weight[i] = weight[j];
//   weight[j] = tempWeight;

//   let tempIq = iQ[i];
//   iQ[i] = iQ[j];
//   iQ[j] = tempIq;
// }

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
