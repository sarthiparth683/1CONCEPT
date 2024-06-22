
// create Animal class with a private 
// field sound 
// normal -- legs implement methods 
// to access and modify the sound property use get and set.
// create one static method call greet that prints "Hello"

class Animal {
    #sound;
    constructor(name) {
      this.name = name;
  
    }
  
    get() {
      this.#sound;
    }
    set(value) {
      this.#sound = value;
    }
  }
  let a1 = new Animal("Lion")
  console.log(a1.get());