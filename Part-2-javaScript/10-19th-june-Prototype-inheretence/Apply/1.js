// APPLY :- The apply() method is literally the same as call() method. They just both take arguments differently.
var person1 = {
  name: "John",
};
var person2 = {
  name: "Done",
};
function printDetails(age, city) {
  console.log(
    this.name + " is " + age + " years old" + " and lives in " + city
  );
};
printDetails.apply(person1, [28, "bangalore"]); // takes in the value of this keyword as the first argument; rest of the arguments to the function can be sent a an array of values
