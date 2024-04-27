//  problem:-2 - Array Operations
//Concatenated array: [1, 2, 3, 4, 5, 6, 7];
// slice() - Extracted portion: [3, 4, 5, 6];
//  indexOf() method. 
//  includes() method. 
// Joined string: "3-4-5-6"
// Reversed array: [6, 5, 4, 3]
//  ascending order - sort() method.


let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7];

let concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray);

let extractedArray = concatenatedArray.slice(2, 6);
// console.log(extractedArray);

let indexOf7 = extractedArray.indexOf(7);
// console.log(indexOf7);     // -1 since not present 
let indexOf6 = extractedArray.indexOf(6);
// console.log(indexOf6)

// console.log(array1.includes(3));     // true
// console.log(array1.includes(37));    // false

if (array1.includes(10)) {
    // console.log("Number 10 is present in array1.")
} else {
    // console.log("Number 10 is not present in array1.");
};

// let joinedString1 = extractedArray.join('-');
// console.log(joinedString1);
// let joinedString2 = array1.join(' - ');
// console.log(joinedString2);

let rev = array1.reverse();
// console.log(rev);

let sum = 0;
for (let i = 0; i < array2.length; i++) {
    sum = sum + array2[i];
}
// console.log(sum);   //18

// sort method is for assending and descending
array1.sort((a, b) => a - b);
console.log(array1);
array1.sort((a, b) => b - a);
console.log(array1);

