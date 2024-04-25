// Problem-1 
// This problem involves finding all palindromes from a given list of strings.
// You are given a list of strings stored in an array called stringList. 
// Your task is to find and print all palindromes from this list.
// An array stringList containing strings.
// The length of this array is stored in a variable called numStrings.
// Palindromes found in the list are: radar madam level
// Print all palindromes found in stringList, separated by a newline. If no palindromes are found, print "No palindromes found."

numStrings = 5;
stringList = ["radar", "hello", "madam", "world", "level"];
let str1 = "";
let str2rev = "";
for (let i = 0; i < numStrings; i++) {
    str1 = stringList[i];
    str2rev = stringList[i].split('').reverse().join('');
    // console.log(str1);
    // console.log(str2rev);

    if (str1 == str2rev) {
        console.log(str1);
    } else {
        console.log("No palindromes found.");
    }
};
