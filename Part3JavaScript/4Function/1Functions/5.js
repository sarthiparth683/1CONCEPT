// Default Parameter in function:
// Introduction
// In JavaScript, a default parameter allows you to set a default value for a function parameter in case no value is provided when the function is called. This can be useful in many real-world scenarios.
// Detailed Explanation

function Human(name, age, salary = 500000) {
  let obj = {
    name: name,
    age: age,
    salary: salary,
  };
  return obj;
}
//here if we do not pass salary it will take 500000 as the default value
let a = Human("Ankur", 25);
console.log(a)
//output is {name: "ankur", age: 25, salary:500000}
let b =  Human("Ankur", 25, 800000);
console.log(b)

//output is {name: "ankur", age: 25, salary:800000}