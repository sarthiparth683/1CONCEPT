// filter return (TRUE VALUE).
let arr1 = [9, 7, 8, 1, 2, 4, 3, 0]
let fl1 = arr1.filter((el, i) => { return el / 2 });
// console.log(fl1);
//---------------------------------------------------------------------------------------------
// 1. Filtering Even Numbers:
const numbers1 = [1, 2, 3, 4, 5];
const fl2 = numbers1.filter((el, i) => { return el % 2 == 0 });
const fl3 = numbers1.map((el, i) => el % 2 == 0);
// console.log(fl2);
// console.log(fl3);
// Output: [2, 4]
//---------------------------------------------------------------------------------------------
// 2. Filtering Strings with a Certain Length:
const words = ['hello', 'world', 'JavaScript', 'filter'];
const fl4 = words.filter((el, i) => el.length > 5);
const fl5 = words.map((el, i) => el.length);
// console.log(fl4);
// console.log(fl5);
// Output: ['JavaScript', 'filter']
//---------------------------------------------------------------------------------------------
// 3. Filtering Objects Based on a Property Value:
const products = [
    { id: 1, name: 'Product 1', price: 40 },
    { id: 2, name: 'Product 2', price: 60 },
    { id: 3, name: 'Product 3', price: 30 }
];
const f6 = products.filter((el, i) => el.price > 50);
// console.log(f6);
const f7 = products.filter((el, i) => el.id);
// console.log(f7);
// //---------------------------------------------------------------------------------------------
// for single number find prime
function prime1(num) {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count = count + 1;
        };
    };
    if (count > 0) {
        console.log("Not a Prime");
    } else {
        console.log("Prime");
    }
};
// prime1(4);

// console.log(Math.sqrt(9)); // 3
// for more than one number find Prime:-
const arr2 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const primeNumbers = arr2.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});
// console.log(primeNumbers);
// //---------------------------------------------------------------------------------------------
// 5. Filtering Elements Based on Index:
const arr3 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const f8 = arr3.filter((el, i) => i % 2 === 0);
// console.log(f8);
const f9 = arr3.filter((el, i) => el % 2 === 0);
// console.log(f9);
// //---------------------------------------------------------------------------------------------
// // 6. Filtering Elements Based on Multiple Conditions:
const users = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 22, city: 'Chicago' }
];
const output1 = users.filter(
    user => user.age >= 21 && user.age <= 30 && user.city === 'New York'
);
// console.log(output1);
const output2 = users.filter((el, i) => el.age > 22);
// console.log(output2);
// //---------------------------------------------------------------------------------------------
// 7. Filtering Elements Using the this Keyword:
const arr4 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const output3 = arr4.filter(function (number) {
    return number % 2 === 0;
}, this);  // `this` refers to the `numbers` array
// console.log(output3);
// Output: [2, 4]
// //---------------------------------------------------------------------------------------------

// 8. Filtering Elements and Transforming Them:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.filter(number => number % 2 === 0).map(number => number * number);
// console.log(squaredNumbers);
// Output: [4, 16]
// //---------------------------------------------------------------------------------------------

// 9. Filtering Elements and Chaining Methods:
const users2 = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 22, city: 'Chicago' }
];
const output4 = users2.filter((el, i) => el.age >= 21 && el.age <= 30 && el.city === 'New York')
    .map((el, i) => el.city);
// console.log(output4);
// Output: ['Alice']
//---------------------------------------------------------------------------------------------
// 10. Handling Sparse Arrays and Undefined Values:
const arr5 = [1, 2, , 4, 5]; // Sparse array with an empty slot
const evenNumbers = arr5.filter(number => typeof number === 'number' && number % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4]
//---------------------------------------------------------------------------------------------
