// Example with apply
// .call & .apply are used to invoke a function & set the value of the this keyword
// inside of the function
// function greet() { 
//     console.log('Hello, ' + this.name);
//   };
//   greet.apply(person); // Similarly invokes `greet` with `person` as `this`
  //---------------------------------------------------------------------------------------- 
  // APPLY
// The apply() method is literally the same as call() method. They just both take arguments differently.
let person5 = {
  name: "Amit",
};
let person6 = {
  name: "vikas",
};
function printDetails(age, city) {
  console.log(
    this.name + " is " + age + " years old" + " and lives in " + city
  );
};
myName.apply(person5, [28, "bangalore"]); // takes in the value of this keyword as the first argument; rest of the arguments to the function can be sent a an array of values