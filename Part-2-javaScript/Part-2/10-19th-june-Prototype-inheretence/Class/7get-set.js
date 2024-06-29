// What are getters and setters?
// Getters and setters are special methods defined within a class to control access to properties. Getters retrieve the value of a property, while setters modify the value of a property.
// Why are they useful?
// Getters and setters provide a mechanism to enforce encapsulation and implement validation or computation logic when accessing or modifying object properties. They allow you to define custom behavior for property access, improving code maintainability and readability.
// Real-world examples or analogies:
// Think of a getter as a window through which you can view the value of a property, and a setter as a door through which you can modify the value of a property. By controlling access to the property, you can ensure that it is used appropriately within the class.
class User {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    get age() {
      return this._age;
    }
  
    set age(newAge) {
      if (newAge > 0 && newAge < 150) {
        this._age = newAge;
      } else {
        console.log("Invalid age value.");
      }
    }
  }
  
  let user1 = new User("Alice", 30);
  console.log(user1.age); // Output: 30
  
  user1.age = 40;
  console.log(user1.age); // Output: 40
  
  user1.age = 200; // Invalid age value.
  console.log(user1.age); // Output: 40 (unchanged)
  //----------------------------------------------------
  class Animal {
    constructor(sound) {
      this._sound = sound;
    }
  
    get sound() {
      return this._sound;
    }
  
    set sound(newSound) {
      this._sound = newSound;
    }
  }
  
  let animal1 = new Animal("Woof");
  console.log(animal1.sound); // Output: Woof
  
  animal1.sound = "Meow";
  console.log(animal1.sound); // Output: Meow
  