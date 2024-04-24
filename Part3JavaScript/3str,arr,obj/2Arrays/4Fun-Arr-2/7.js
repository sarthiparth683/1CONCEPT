// combination method Qn:1
// - input
// const numbers = [1, 2, 3, 4, 5, 7];

// - Given an array of numbers, write a function sumOfSquaresOfOddNumbers that returns the sum of the squares of all odd numbers using .map(), .filter(), and .reduce().


const numbers = [1, 2, 3, 4, 5, 7];

function sumOfSquaresOfOddNumbers(numbers) {
    return numbers
        .filter(number => number % 2 !== 0)
        .map(number => number ** 2)
        .reduce((acc, val) => acc + val, 0);
}
console.log(sumOfSquaresOfOddNumbers(numbers));
// - output 
// 84; 