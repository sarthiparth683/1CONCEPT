
// Inheritance Using ES6 Classes
class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(this.name, "says Hello");
    }
  }
  
  let person1 = new Person("Vivek");
  person1.sayHello();
  
  class Teacher extends Person {
    constructor(name, subject) {
      super(name);
      this.subject = subject;
    }
  
    teach() {
      console.log(this.name, "is Teaching ", this.subject);
    }
  }
  
  let teacher1 = new Teacher("Akash", "Science");
  teacher1.sayHello();
  teacher1.teach();
  //-----------------------------------------
  // Under the hood exactly the same prototype chain is getting created:
  
  console.log(teacher1);
  console.log(teacher1.__proto__ === Teacher.prototype);
  console.log(Teacher.prototype.__proto__ === Person.prototype);