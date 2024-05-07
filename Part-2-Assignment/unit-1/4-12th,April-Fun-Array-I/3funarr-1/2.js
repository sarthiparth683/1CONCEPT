// Problem-1 
// This problem involves finding all palindromes from a given list of strings.

let stringList = ["radar", "hello", "madam", "world", "level"];
// console.log(stringList[1].split("").reverse().join("")); // concept
let str1 = "";
let str2rev = "";
for (let i = 0; i < stringList.length; i++) {
    str1 = stringList[i];
    str2rev = stringList[i].split('').reverse().join('');
    if (str1 == str2rev) {
        console.log(str1);
    } else {
        console.log("No palindromes found.");
    }
};
