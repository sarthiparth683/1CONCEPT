
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
    };
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
  i1.dial(); // "tring.. tring..."
  i1.sendMessage(); // "Sending message..."
  i1.cameraClick(); // "Camera clicked"
  //-----------------------------------------------------------------------------
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
  const john = new Person("John", 30);
  john.sayHello(); // Hello, my name is John and I am 30 years old.
  