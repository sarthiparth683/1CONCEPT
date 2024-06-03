// Introduction
// Detailed Explanation
//                      var	           let	              const
// Scope	             function	       block	            block
// re-declaration	     allowed ✅	   not-allowed❌	     not-allowed❌
// accessibility       accessible ✅	 not accessible ❌	 not accessible ❌
//-----------------------------------------------------------------------------
// let vs const vs var
function scopeTest() {
  var outerVar = "outer var";
  let outerLet = "outer let";
  if (true) {
    var innerVar = "inner var"; // function scoped
    let innerLet = "inner let"; // block scoped
  }
  console.log(outerVar);
  console.log(outerLet);
  console.log(innerVar); // inner var
  // console.log(innerLet); // Uncaught ReferenceError: innerLet is not defined so, let and const are not a function scope.
};
scopeTest();
//----------------------------------------------------------------------------------
function forWithLet() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
      // because of block scope, every iteration gets a separate i
      // let automatically creates a new i for each iteration
      // instead of creating one i for the whole loop,
      // we have brand new i's for each iteration. Thanks to block scope.
    }, 1000);
  }
};
forWithLet();
//-----------------------------------------------------------------------------------
const name = "Vivek";
// ** But const can be used to redeclare ((obj key's)).
const user1 = {
  name: "Vivek",
};
user1.name = "Akash";
console.log("user-1", user1);
//-----------------------------------------------------------------------------------
// ** const can be used to push value into arrays
const user2 = ["a", "b", "c"];
user2.push("78");
console.log("user-2", user2);
//-----------------------------------------------------------------------------------