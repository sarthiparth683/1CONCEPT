// convert the following factory function to a constructor function
function  Animal(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function() {
      console.log('eating...')
    }
    this.greet = function() {
      console.log(`Hi, I have ${obj.noOfLegs} legs.`)
    }
  
    return obj;
  }
  
  // example invocation
  let a1 = new Animal(4,true);
  console.log(a1)
  a1.eat("eating...") // 
  a1.greet("Hi, I have 4 legs.") // 
  
  
  