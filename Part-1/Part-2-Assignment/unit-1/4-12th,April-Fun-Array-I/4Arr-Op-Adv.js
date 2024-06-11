let numbers = [3, 8, 5, 12, 7, 14, 11]
function calculateOddSum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        if (num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}

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
}

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

let average = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);



console.log("Sum of odd numbers:", calculateOddSum(numbers));
console.log("Contains prime numbers:", containsPrime(numbers));
console.log("Prime numbers:", primeNumbers);
console.log("Average of numbers:", average);
console.log("Maximum number:", maxNumber);
console.log("Minimum number:", minNumber);
numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers);
numbers.reverse();
console.log("Reversed sorted array:", numbers);