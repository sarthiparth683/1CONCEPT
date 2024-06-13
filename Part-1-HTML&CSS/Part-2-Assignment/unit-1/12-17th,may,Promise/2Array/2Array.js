const numbers = [3, 8, 12, 5, 10];
// function filterArray with parameters arr and callback
function filterArray(arr, callback) {
    // declare filteredArray as an empty array
    const filteredArray = [];

    // forEach element in arr
    arr.forEach(element => {
        // if callback(element) is true, push element to filteredArray
        if (callback(element)) {
            filteredArray.push(element);
        }
    });

    return filteredArray;
}
// declare isEven as a function that takes a number and returns true if the number is even
const isEven = num => num % 2 === 0;

// declare originalArray as numbers and filteredArray as the result of calling filterArray with originalArray and isEven
const originalArray = numbers;
const filteredArray = filterArray(originalArray, isEven);

console.log("Original Array:", originalArray);
console.log("Filtered Array (even numbers only):", filteredArray);