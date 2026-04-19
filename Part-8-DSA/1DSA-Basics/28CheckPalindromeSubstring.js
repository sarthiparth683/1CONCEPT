// Find Palindrome in SubString

function isPalindrome(inputString) {
  for (let i = 0; i <= inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// ---------------------------------------------------------------
function findPalindromes(inputString) {
  const result = [];
  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
      // console.log(i, j);
      const substr = inputString.slice(i, j);
      if (isPalindrome(substr) && substr.length > 1) {
        result.push(substr);
      }
    }
  }

  return result;
}

console.log(findPalindromes("radar"));
console.log(findPalindromes("madam"));
console.log(findPalindromes("01234palindromemadam"));
// ==========================================================================

function subString(inputString) {
  const result = [];
  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
      console.log(i, j);
      const substr = inputString.slice(i, j);
      console.log(substr);
    }
  }

  return result;
}

console.log(subString("radar"));
