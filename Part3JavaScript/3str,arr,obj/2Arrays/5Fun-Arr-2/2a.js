// qn :2
// Provided a function that takes an array of numbers, use .reduce() to find the sum of all numbers that are divisible by 3 or 5, and return a single number.
//   input 
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
// output
// 1817;
// function ProductOfMultipleOfThreeOrFive(numbers) {
//     return numbers.reduce((acc, el) => {
//         if (el % 3 === 0 || el % 5 === 0) {
//             acc += el;
//         }
//         return acc;
//     }, 0);
// }
// console.log(ProductOfMultipleOfThreeOrFive(numbers));




function ProductOfMultipleOfThreeOrFive() {
    let sum = numbers.reduce((a, el, i) => {
        if (el % 3 == 0 || el % 5 == 0) {
            a = a + el
        }
        return a
    }, 0)
    return sum
}
console.log(ProductOfMultipleOfThreeOrFive(numbers));


