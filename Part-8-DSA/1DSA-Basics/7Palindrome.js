function isPalindrome(inputString) {
  for (let i = 0; i <= inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("ashish"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("level"));
console.log(isPalindrome("abba"));
// ===========================================================================
function isPalindrome2(inputString) {
  inputString = inputString.toLowerCase();
  let start = 0;
  let end = inputString.length - 1;
  for (start, end; start < end; start++, end--) {
    if (inputString[start] !== inputString[end]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome2("ashish"));
console.log(isPalindrome2("madam"));
console.log(isPalindrome2("level"));
console.log(isPalindrome2("Abba"));
// ===========================================================================
function isPalindrome3(inputString) {
  inputString = inputString.toLowerCase();

  const reversedString = inputString.split("").reverse().join("");
  return reversedString === inputString ? true : false
}

console.log(isPalindrome3("ashish"));
console.log(isPalindrome3("madaM"));
console.log(isPalindrome3("level"));
console.log(isPalindrome3("Abba"));
// ===========================================================================
