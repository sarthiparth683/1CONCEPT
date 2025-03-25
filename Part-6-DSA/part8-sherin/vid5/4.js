// Check Palindrome
// let str = prompt("Enter string to check palindrome or not");
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   rev = rev + str.charAt(i); //or
//   // console.log(str[i])
//   // rev = rev + str[i]
// }
// console.log(rev)
// if (rev == str) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a Palindrome");
// }
//-------------------------------------------------------------
// Method-II- two pointer approach
let str = prompt("Enter string to check palindrome or not");
let isPalindrome = true;
let i = 0,
  j = str.length - 1;

while (i < j) {
  if (str.charAt(i) != str.charAt(j)) { // or
  // if (str[i] != str[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
if (isPalindrome) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}
