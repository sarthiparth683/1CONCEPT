// The Event Loop
// The Event Loop is a mechanism that checks if the call stack is empty and then looks at the task queue. If the queue is not empty, it takes the first event and pushes it to the call stack, which then executes it. This allows JavaScript to perform non-blocking operations.
// console.log('Hi');
// setTimeout(() => console.log('String2'), 1000);
// console.log('JavaScript');
// This will log: 'Hi','JavaScript' and,then after 1 seconds, 'string2'.
//---------------------------------------------------------------------------------------
// Callbacks and Browser APIs
// function alertDone() {
//     alert('Done!');
// }
// setInterval(alertDone, 1000);

// setInterval(() => {
//     console.log("sarthi")
// }, 1000);

//------------------------------------------------------------------------------------
// SetTimeout and SetInterval
// setTimeout allows you to execute a function once after a specified period.
// setInterval repeatedly executes a function at every given time-interval until it is stopped.
// SetTimeout Example:-
// setTimeout(() => {
//     console.log('This message is shown after 1 seconds.');
// }, 1000);
//------------------------------------------------------------------------------------
// SetInterval Example:-
// setInterval runs continously...
// setInterval(() => {
//     console.log('This message appears every 1 seconds.');
// }, 1000);
//------------------------------------------------------------------------------------
// Introduction
// Detailed Explanation
//                      var	           let	              const
// Scope	             function	       block	            block
// re-declaration	     allowed ✅	   not-allowed❌	     not-allowed❌
// accessibility       accessible ✅	 not accessible ❌	 not accessible ❌
//-----------------------------------------------------------------------------
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
// };
// scopeTest();
//-----------------------------------------------------------------------------------
// let getData = true;
// let p = new Promise((resolve, reject) => {
//   resolve("successfull-1");
//   reject("Data failed");
// });
// console.log(p);
// p.then((response) => {
//   let h3 = document.createElement("h3");
//   h3.textContent = "Data loaded....";
//   cont.append(h3);
//   console.log(response);
// });
// p.catch(() => {
//   let h3 = document.createElement("h3");
//   h3.textContent = "Data Failed to load....";
//   cont.append(h3);
//   console.log("Data Failed");
// });
//-------------------------------------------------------------------------------------
