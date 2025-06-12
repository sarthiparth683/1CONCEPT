// split converts "string" into "Array"

let line = input.trim().split("\n");
let [n, arr] = line;
arr = line[1].trim().split(" ").map(Number); // split converts "string" into "array"
let string = arr.join(""); // arr into string
let revStr = arr.split("").reverse().join(""); // arr into reverse string


// string into array
// let str = "1234"
// let arr = str.trim("").split("").map(Number); // split -> array
// console.log(arr)
//--------------------------------------
// Array into string - .join("")
// let arr = [1, 2, 3];
// let str = arr.join(" "); 
// console.log(str)
// let revStr = arr.reverse().join(" ");
// console.log(revStr);