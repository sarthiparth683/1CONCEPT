
var person1 = {
  name: "John",
};
var person2 = {
  name: "Done",
};
function myName() {
  console.log(this.name);
};
myName.call(person1);
myName.call(person2);
//---------------------------------------------------------------------
//   In case there are multiple arguments to function
var person3 = {
  name: "Dwayn",
};
var person4 = {
  name: "Rock",
};
function printDetails(age, city) {
  console.log(
    this.name + " is " + age + " years old" + " and lives in " + city
  );
};
printDetails.call(person3, 28, "New york");
printDetails.call(person4, 32, "Bengaluru");
//-----------------------------------------------------------------