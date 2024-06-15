// Student Activities
// What will be the output of the code? Explain why.
function greeting() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person1 = { name: 'Alice' };
  const person2 = { name: 'Bob' };
  
  const greetPerson1 = greeting.bind(person1);
  const greetPerson2 = greeting.bind(person2);
  
  greetPerson1();
  greetPerson2();
  
  //--------------------------------------------------------------------
//   Correct Answer: "Hello, Alice!" followed by "Hello, Bob!"

// Explanation: The bind() method creates a new function with a specified this value and initial arguments. In this example, greetPerson1 and greetPerson2 are new functions derived from greeting, but with this set to person1 and person2 respectively. When these new functions are called, they access the name property of their respective person objects, resulting in the expected output.

// Conclusion
// In conclusion, the this keyword is a powerful feature of JavaScript that allows functions to dynamically access and interact with objects. By understanding how this behaves in different contexts, developers can write more efficient and maintainable code. Mastery of this is essential for building scalable and robust JavaScript applications.

// Resources - Official Documentation and Other Resources