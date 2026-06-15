// =====================================================================
// Two Pointer approach
function palindrome1(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindrome1("Racecar"));
console.log(palindrome1("Racecar7"));
console.log(palindrome1("Radar"));
console.log(palindrome1("Kayak"));
console.log(palindrome1("Level"));
console.log(palindrome1("Madam"));
// =====================================================================
// Reverse String
function palindrome2(str) {
  str = str.toLowerCase();
  let rev = str.split("").reverse().join("");
  return str === rev ? true : false;
}

console.log(palindrome2("Racecar"));
console.log(palindrome2("Racecar7"));
console.log(palindrome2("Radar"));
console.log(palindrome2("Kayak"));
console.log(palindrome2("Level"));
console.log(palindrome2("Madam"));
// =====================================================================
// Recursion
function isPalindrome(str) {
  str = str.toLowerCase();
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar"));
console.log("012345678".slice(1,-1))
// =====================================================================
// Using every()
function isPalindrome(str) {
  str = str.toLowerCase();

  return [...str].every((char, i) => char === str[str.length - 1 - i]);
}

console.log(isPalindrome("racecar"));
// =====================================================================
// Using a Stack
function isPalindrome(str) {
  str = str.toLowerCase();

  const stack = [...str];

  for (let char of str) {
    if (char !== stack.pop()) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("racecar"));
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
