
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
// console.log(i1);
// i1.dial(); 
// i1.sendMessage(); 
// i1.cameraClick(); 
//-------------------------------------------------------------------
class Person extends IPhone1 {
  constructor(generation, ASIN, weight, OS, RAM, color, display, camera, name, age)// all-old+new-key-in-constructor
  {
    super(generation, ASIN, weight, OS, RAM, color, display, camera) // only-old-key-values-in-super;
    this.name = name;
    this.age = age;
  };
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
};
let p1 = new Person(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP",
  "Achilies",
  25
);
console.log(p1);
p1.sayHello();

