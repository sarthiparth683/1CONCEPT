// Constructor Method
// The constructor method is called when a new instance of the class is created. It's used to set the initial state of the object.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
///---
// perties
// Classes can have properties that are defined in the constructor method or outside of it.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  occupation = "Developer"; // Class property
}

//------------
// MEthods
// Classes can have methods that are defined inside the class body.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

////------------
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
// iPhone example using ES6 classes
// (copy paste code from constructor function to demo the similarities)
class IPhone1 {
  constructor(generation, ASIN, weight, OS, RAM, color, display, camera) {
    this.generation = generation;
    this.asin = ASIN;
    this.weight = weight;
    this.os = OS;
    this.ram = RAM;
    this.color = color;
    this.display = display;
    this.camera = camera;
  }

  dial() {
    console.log("tring.. tring...");
  }

  sendMessage() {
    console.log("Sending message...");
  }

  cameraClick() {
    console.log("Camera clicked");
  }
}

let i1 = new IPhone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);

// --------------------------------
// bluetooth feature added
// 3g Internet feature added
// high resolution capture added
// --------------------------------

class IPhone2 extends IPhone1 {
  constructor(
    generation,
    ASIN,
    weight,
    OS,
    RAM,
    color,
    display,
    camera,
    bluetooth,
    internetType
  ) {
    super(generation, ASIN, weight, OS, RAM, color, display, camera);
    this.bluetooth = "2.0";
    this.internet = "3g";
  }

  connectWithBlutoothDevice() {
    console.log("Connecting with bluetooth divice...");
  }

  connectWithInternet() {
    console.log("Connecting with 3g Internet...");
  }

  cameraClick() {
    console.log("Clicking a high resolution pic...");
  }
}

let i2 = new IPhone2();
//------------------------------------------------------------------------------------------






