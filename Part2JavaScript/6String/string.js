// String Length
// var greeting = "Hello, World!";
// console.log(greeting.length); 

// Accessing Characters
// var word = "JavaScript";
// console.log(word[0]); 
// console.log(word[4]);

// Uppercase and Lowercase
// var word = "JavaScript";
// var upperCaseWord = word.toUpperCase();
// var lowerCaseWord = word.toLowerCase();
// console.log(upperCaseWord); 
// console.log(lowerCaseWord); 

// Reversing a String
// let reversed = "";
// let input2 = "JavaScript";
// let count = 0;
// for (let i=input2.length-1; i>=0; i--) {
//   reversed += input2[i];
// count += input2[i] + 1
// console.log(i);
// console.log(input2[i]);
// }
// console.log(reversed); 
// console.log(input2[i]);
// console.log(count);

// Counting Vowels
// let count = 0;
// let vowels = "aeiou";
// let input1 = "programming";
// for (let i = 0; i < input1.length; i++) {
//   if (input1[i] === "a" || input1[i] === "e" || input1[i] === "i" || input1[i] === "o" || input1[i] === "u") {
//     count++;
//   }
// }
// console.log(count); 

// Checking Palilndrome
// let input1 = "level";
// let reversed1 = "";
// let count  = 0;
// for (let i = input1.length - 1; i >= 0; i--) {
//   reversed1 += input1[i];
//   console.log(input1[i]);
// count = count + i;
// console.log(count);
// console.log(i);
// }
// console.log(count);
// console.log(i);
// console.log(input1[i]);
// console.log(reversed1);
// console.log(input1 === reversed1);   // Expected Output: true

// let input2 = "hello";
// let reversed2 = "";
// for (let i = input2.length - 1; i >= 0; i--) {
//   reversed2 += input2[i];
// }
// console.log(input2 === reversed2);

// for (let i = 0; i <12; i++) {
//    for (let j = 0; j <60; j++) {
//     console.log(i)
//     }
// }

// for (let i = 0; i <12; i++) {
//     let count = 0
//     for (let j = 0; j <60; j++) {
//    count = count + j;
//      }
//      console.log(count)
//  }

// let x = 0;
// for (let i = 0; i < 5; i++) {
//    for (let i = 0; i > -5; i--) {
//       x += 1;
//    }
// }
// console.log(x);

// for (let i = 0; i < 3; i++) {
//     let bag = "";
//     for (let j = 0; j < 3; j++) {
//        bag = bag + "*" + " ";
//     }
//     console.log(bag);
//  }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//        if (i % j == 0) {
//           console.log(i);
//           break;
//        }
//     }
//  }


let x = 0;
while (x < 10) {
   x += 2;
}
console.log(x);