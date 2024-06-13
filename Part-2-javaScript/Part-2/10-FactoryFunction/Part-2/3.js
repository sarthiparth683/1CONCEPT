Call, Apply & Bind Methods :

All JavaScript functions has access to some very special methods which we can use to control where ‘this’ should refer. Such methods are call(), bind() & apply().

CALL
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
//------------------------------------------------------------------------
// In case there are multiple arguments to function

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
//------------------------------------------------------------------------
// the above code is similar to

var person1 = {
  name: "John",
  printDetails(age, city) {
    console.log(
      this.name + " is " + age + " years old" + " and lives in " + city
    );
  },
};
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
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
  
//------------------------------------------------------------------------
// BIND
// You can bind a particular object as ‘this’ to a function and use it later. You cannot use call() or apply() later, they run immediately.

// example4:
var person1 = {
    name: "John",
  };
  
  var person2 = {
    name: "Jill",
  };
  
  function myName(age, city) {
    this.age = age;
    this.city = city;
  }
  let myBindFunc = myName.bind(person1, 28, "bangalore"); // bind gives you a new function in which the this keyword is preset for us; it returns a function which can be invoked later; this "this" value being pointed to person1 will be remembered;
  
  myBindFunc();
  
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
