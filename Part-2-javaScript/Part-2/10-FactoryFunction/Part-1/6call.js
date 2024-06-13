// Call, Apply & Bind Methods:
// .call & .apply are used to invoke a function & set the value of the this keyword
// inside of the function
// Example with call
function greet() {
  console.log('Hello, ' + this.name);
};
const person = {
  name: 'John',
};
greet.call(person); // Output: Hello, John
//-----------------------------------------------------------------------------------------  
let person1 = {
  name: "Aman",
};
let person2 = {
  name: "willam",
};
function myName() {
  console.log(this.name);
};
myName.call(person1);
myName.call(person2);

// In case there are multiple arguments to function
let person3 = {
  name: "jacob",
};
let person4 = {
  name: "watson",
};
function printDetails(age, city) {
  console.log(
    this.name + " is " + age + " years old" + " and lives in " + city
  );
};
printDetails.call(person3, 28, "New york"); // John is 28 years old and lives in New york
printDetails.call(person4, 32, "Bengaluru"); // Jill is 32 years old and lives in Bengaluru
//
