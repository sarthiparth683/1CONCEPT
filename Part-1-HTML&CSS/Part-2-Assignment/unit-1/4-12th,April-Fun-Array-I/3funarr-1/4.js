let numbers = [3, 8, 5, 12, 7, 14, 11];

function calculateOddSum(numbers) {
    let sum = 0;
    for (let el of numbers) {
        if (el % 2 !== 0) {
            sum += el;
        }
    }
    return sum;
};
// console.log("Sum of odd numbers:", calculateOddSum(numbers));
// 26
// ---------------------------------------------------------------------------
function containsPrime(numbers) {
    for (let num of numbers) {
        if (num <= 1) {
            continue;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return true;
        }
    }
    return false;
};
// console.log("Contains prime numbers:", containsPrime(numbers));
//  console.log(Math.sqrt(64))


let primeNumbers = numbers.filter(num => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
});
// console.log("Prime numbers:", primeNumbers);
//---------------------------------------------------------------------------

let average = numbers.reduce((acc, val) => (acc + val)) / numbers.length;
// console.log("Average of numbers:", average);
// --------------------------------------------------------------------------

let maxNumber = Math.max(...numbers);
// console.log("Maximum number:", maxNumber);
let minNumber = Math.min(...numbers);
// console.log("Minimum number:", minNumber);
//------------------------------------------------------------------------------

// sort:-assending and descending
numbers.sort((a, b) => a - b);
// console.log("Sorted array:", numbers);
numbers.sort((a, b) => b - a);
// console.log("Sorted array:", numbers);
//---------------------------------------------------------------------------

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log("Reversed sorted array:", arr1.reverse());