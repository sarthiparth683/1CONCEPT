//------------------------------------------------------------------------------------------
// let vs const vs var
// function scopeTest() {
//   var outerVar = "outer var";
//   let outerLet = "outer let";
//   if (true) {
//     var innerVar = "inner var"; // function scoped
//     let innerLet = "inner let"; // block scoped
//   }
//   console.log(outerVar);
//   console.log(outerLet);
//   console.log(innerVar); // inner var
//   // console.log(innerLet); // Uncaught ReferenceError: innerLet is not defined so, let and const are not a function scope.
// }
// scopeTest();
//------------------------------------------------------------------------------------------

// var a = 100;
// let b = 200;
// const c = 300;
// if (true) {
//   let d = 400;
//   var e = 500;
//   console.log(a, b, c);
//   console.log(d, e);
// }
// console.log("outside block", e);
// console.log("outside block", d);
//----------------------------------------------------------------------
