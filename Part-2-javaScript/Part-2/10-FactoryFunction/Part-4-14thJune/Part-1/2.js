// Call, Apply & Bind Methods :

// All JavaScript functions has access to some very special methods which we can use to control where ‘this’ should refer. Such methods are call(), bind() & apply().
// .call & .apply are used to invoke a function & set the value of the this keyword
// inside of the function

// .bind is used to create a function & set the value of the this keyword
// inside of the newly created function

var person1 = {
    name: "John",
  };
  
  var person2 = {
    name: "Jill",
  };
  
  function myName() {
    console.log(this.name);
  }
  
  myName.call(person1); // takes in the value of this keyword as the first argument
  // prints John
  myName.call(person2); // Prints Jill
  //---------------------------------------------------------------------
//   In case there are multiple arguments to function

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

printDetails.call(person1, 28, "New york"); // John is 28 years old and lives in New york
printDetails.call(person2, 32, "Bengaluru"); // Jill is 32 years old and lives in Bengaluru
//-------------------------------------------------------------------
// the above code is similar to

var person1 = {
  name: "John",
  printDetails(age, city) {
    console.log(
      this.name + " is " + age + " years old" + " and lives in " + city
    );
  },
};