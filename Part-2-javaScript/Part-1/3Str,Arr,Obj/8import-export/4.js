// let numArray = [2,4,3,67,87,89,21,17];
// function evenOdd(params) {
//     for (let i = 0; i <numArray.length; i++) {
        
//         if (numArray[i] % 2 == 0) {
//             console.log("even", numArray[i]);
//         } else {
//             console.log("odd", numArray[i]);
//         }
//     }
 
// }
// evenOdd(numArray);

let numberArray = [1,2,3,4,5,6,7,8,9,10];
let even = numberArray.forEach((index  )=> index % 2 == 0);
console.log( numberArray);

let map = numberArray.map((index)=> index*3);
console.log(map);