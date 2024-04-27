// qn :2  use .reduce() to find the sum  divisible by 3 or 5, and return a single number.
// input 
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
// output
// 1817;
//--------------------------------------------------------

function ProductOfMultipleOfThreeOrFive(numbers) {
    return numbers.reduce((acc, cv) => {
        if (cv % 3 === 0 || cv % 5 === 0) {
            acc += cv;
        }
        return acc;
    }, 0);
}
console.log(ProductOfMultipleOfThreeOrFive(numbers));



