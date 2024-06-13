// The `this` Keyword
// The this keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used: in a method, this refers to the owner object; alone, this refers to the global object; in a function, this refers to the global object; in a function (in strict mode), this is undefined; in an event, this refers to the element that received the event.
// Example
const person = {
    name1: 'John',
    name2: 'Cena',
    name3: "ABDevilers",
    name4: "Whyclif",
    name5: "Williamson",
    greet: function () {
        console.log('Hello-1, ' + this);
        console.log('Hello, ' + this.name1);
        console.log('Hello, ' + this.name2);
        console.log('Hello, ' + this.name3);
        console.log('Hello, ' + this.name4);
        console.log('Hello, ' + this.name5);
    }
};
person.greet(); // Output: Hello, John
// In this example, this refers to the person object that greet function is a method of.
//------------------------------------------------------------------------------------------
// Arrow Functions and `this`
// Arrow functions do not have their own this value. Instead, this is lexically bound, meaning it uses this from the surrounding code block.
// Example
const person1 = {
    name: 'John',
    greet: () => {
      console.log('Hello, ' + this.name); // `this` is not bound to `person`
    }
  };
  person1.greet(); // Output: Hello, 
  // In this example, person.greet() does not have access to person's name property because arrow functions do not bind their own this.
  //-------------------------------------------------------------------------------------------