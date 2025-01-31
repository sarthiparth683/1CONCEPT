### Question 4: Check if a number is palindrome

```javascript
let isPalindrome = function(x) {
    let copyNum = x, reverseNum = 0;

    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return x === reverseNum;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1234)); // false