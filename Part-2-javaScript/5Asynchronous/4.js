// Promises:-
// Promises have three states:
// Pending: The initial state when the Promise is created and the asynchronous operation is still in progress.
// Fulfilled: The state when the asynchronous operation is successfully completed, and the Promise is resolved with a value.
// Rejected: The state when the asynchronous operation encounters an error or failure, and the Promise is rejected with a reason or error object.
//------------------------------------------------------------------------------------------
// The constructor syntax for a promise object is:
// let promise = new Promise(function (resolve, reject) {
//   // executor (the producing code, "singer")
// });
//-----------------------------------------------------------------------------------------
// Producing a Promise:-
// Example:1
function getReleaseDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { date: "31st October", Location: "Bangalore" };
      if (data) {
        resolve(data);
      } else {
        reject(new Error("Albul release date postponed for time being.")); // Reject the promise with an error
      }
    }, 1000);
  });
};
// Consuming a Promise: -
getReleaseDate()
  .then((data) => {
    console.log("Greetings! this is the release information:", data);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
//------------------------------------------------------------------------------------------
// Example 2:-
//create a function called fatherPromise that take one marks array and will return a promise
//after 2 sec the promise should either resolve or reject if the average marks is above 75
//if average marks>=75 => resolve it saying "Congrats! I will gift you a bike"
//else =>reject the promise saying "Sorry marks are not as expected , no bikes!"
//produce a promise
function fatherPromise(marks) {
  return new Promise((resolve, reject) => {
    let sum = marks.reduce((acc, item) => item + acc);
    let average = sum / marks.length;
    setTimeout(() => {
      if (average >= 75) {
        resolve("CONGRATS! I will gift you a bike");
      } else {
        reject("SORRY! marks are not as expected , no bikes!");
      }
    }, 1000);
  });
};
//consume the promise
let marks = [70, 70, 755];
fatherPromise(marks)
  .then((item) => {
    console.log("testing- .then:-", item);
  })
  .catch((error) => {
    console.log("testing- .catch:-", error);
  });
//-------------------------------------------------------------------------------------------
// Examples:
let p = new Promise((resolve, reject) => {
    let a = 10;
    if (a == 10) {
        resolve("passed")
    } else {
        reject("failed");
    }
});
p.then((result) => {
    console.log('Promise resolved with:', result);
}).catch((error) => {
    console.error('Promise rejected with:', error);
});
//---------------------------------------------------------------------------------------
// Async function
// //Hoisting 
// with var:-
// console.log("before declaration", a)
// var a = 100  // var is global scoped
// console.log("after declaration", a)
//--------------------------------------------
// with let:-
// console.log("before declaration", b)
// let b = 200;
// console.log("after declaration", b)
//-----------------------------------------------
// Global Scoped/block scoped/function scoped
// global scoped
// var is global scoped
// let and const is block scoped
// var a = 100; 
// let b  = 200;
// const c = 300;
// console.log(a,b,c)
// if (true) {
//     let d = false;
//     var e = true;
//     console.log(a,b,c);
//     console.log("inside block", d, e);
// }
// console.log("outside block", e);
// console.log("outside block", d);
//--------------------------------------------------------
// function hello() {
//     console.log(a, b, c)
// }
// hello();
//-----------------------------------------------
// function scoped
// function print()
// {
//     let z = false
//     return z
//     // console.log(a)
// }
// z = print()
//  console.log(z);
//-----------------------------------------------
// can redeclare and reassign
// var a = 10;
// function sum(){
//     // Ma
//     /// 1000 lines of code, a is a number
//     let sp = 1000
//     console.log(`Discounted Price is ${sp-(sp*a/100)}`)
// }
// var a = "Passed"
// function check(){
//     /// 100 lines of coide, a  is a boolean
//     if(a=="Passed"){
//         console.log("Check Passed")
//     }
// }
// sum()
// check()
// ES6 they have introduced something , which checks,
// whether declartion has already done
// let & const


/// in let redeclaration is not allowed
// but you can reassign
// let a = 10;
// function sum(){
//     // Ma
//     /// 1000 lines of code, a is a number
//     let sp = 1000
//     console.log(`Discounted Price is ${sp-(sp*a/100)}`)
// }
// //let a = "Passed" // ReDeclaration
// a = "Passed"
// function check(){
//     /// 100 lines of coide, a  is a boolean
//     if(a=="Passed"){
//         console.log("Check Passed")
//     }
// }
// sum()
// check()

// const
// can't redeclare and can't reassign
// const a = 10;
// function sum(){
//     // Ma
//     /// 1000 lines of code, a is a number
//     let sp = 1000
//     console.log(`Discounted Price is ${sp-(sp*a/100)}`)
// }
// //let a = "Passed" // ReDeclaration
//  a = "Passed"
// function check(){
//     /// 100 lines of coide, a  is a boolean
//     if(a=="Passed"){
//         console.log("Check Passed")
//     }
// }
// sum()
// check()
  