// APPLY
// The apply() method is literally the same as call() method. They just both take arguments differently.

// example3:
var person1 = {
    name: "John",
  };
  
  var person2 = {
    name: "Jill",
  };
  
  function printDetails(age, city) {
    console.log(
      this.name + " is " + age + " years old" + " and lives in " + city
    );
  }
  myName.apply(person1, [28, "bangalore"]); // takes in the value of this keyword as the first argument; rest of the arguments to the function can be sent a an array of values
  