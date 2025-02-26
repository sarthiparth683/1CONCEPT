// sub string
const str = "parth";
for (let i = 0; i < str.length; i++) {
  // console.log(str[i])
  for (let j = 0; j < str.length; j++) {}

}

function substringFind(str){
  let subStr = [];
for(let i = 0;i<str.length;i++){

  let temp = "";
  for(let j = i;j<str.length; j++){
    console.log(str[j])
temp+=str[j];
subStr.push(temp);

  }
}
console.log(subStr.length);

}
substringFind("hello")

// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j <= str.length; j++) {
//     console.log(i, j));
//   }
// }

// p, a, r, t, h
// 0, 1, 2, 3, 4

// art
// 1 - 3

// p
// pa
// par
// part
// parth

// a
// ar
// art
// arth

// r
// rt
// rth

// t
// th

// h

// how many subarray can possible from given array
//
// [
//    [1]
//    [1, 2]
//    [1, 2, 3]
//    [1, 2, 3, 4]

//    [2]
//    [2, 3]
//    [2, 3, 4]

//    [3]
//    [3, 4]

//    [4]
// ];

// let arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
