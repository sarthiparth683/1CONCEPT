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
  