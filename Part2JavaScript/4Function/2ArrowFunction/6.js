// Arrow Functions :
// Introduction
// Arrow functions in JavaScript provide a concise syntax for writing function expressions
// Detailed Explanation
// Regular function
function greet(greeting, name) {
  return `${greeting}, from ${name}`;
}

// Arrow function
let newGreet = (greeting, name) => {
  return `${greeting}, from ${name}`;
};

//  OR 
let newGreet1 = (greeting, name) => `${greeting}, from ${name}`;

console.log(newGreet1("greeting" , "name"));