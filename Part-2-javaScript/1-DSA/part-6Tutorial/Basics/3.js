### Question 3: Count the number of digits of a number

```javascript
function countDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10