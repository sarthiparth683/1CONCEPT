// What are private fields?
// Private fields are class properties that are not accessible from outside the class. They are denoted by prefixing the property name with a # symbol.
// Why are they useful?
// Private fields enhance encapsulation by restricting access to sensitive data, preventing unintended modifications, and ensuring data integrity. They help manage the complexity of larger codebases and reduce the risk of unintentional errors.
// Real-world examples or analogies:
// Think of private fields in a class as private rooms in a house. Only the occupants of the house (class) have access to these rooms, while external visitors (code outside the class) are not allowed to enter.
// Code Implementation | Examples
class Person {
    #age;
  
    constructor(name, age) {
      this.name = name;
      this.#age = age;
    }
  
    get age() {
      return this.#age;
    }
  }
  
  const john = new Person("John", 30);
  console.log(john.age); // Output: 30
  console.log(john.#age); // Error: SyntaxError: Private field '#age' must be declared in an enclosing class
  