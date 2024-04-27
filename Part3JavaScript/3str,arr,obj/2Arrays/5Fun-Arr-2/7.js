// combination method Qn:1
// - Given an array of numbers, write a function sumOfSquaresOfOddNumbers that returns the sum of the squares of all odd numbers using .map(), .filter(), and .reduce().

// - input
const numbers1 = [1, 2, 3, 4, 5, 7];
// - output 
// 84; 


function sumOfSquaresOfOddNumbers(numbers) {
    return numbers.filter(number => number % 2 !== 0).map(number => number ** 2).reduce((acc, val) => acc + val, 0);
}
console.log(sumOfSquaresOfOddNumbers(numbers1));
