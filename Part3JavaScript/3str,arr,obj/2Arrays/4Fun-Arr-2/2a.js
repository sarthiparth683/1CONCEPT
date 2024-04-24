// qn :2
//   input 
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
function ProductOfMultipleOfThreeOrFive(numbers) {
    return numbers.reduce((acc, number) => {
        if (number % 3 === 0 || number % 5 === 0) {
            acc += number;
        }
        return acc;
    }, 0); 
}
console.log(ProductOfMultipleOfThreeOrFive(numbers));
// output
// 1817;