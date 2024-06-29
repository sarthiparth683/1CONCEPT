// // Object.keys, values, and entries
// // Methods like Object.keys, Object.values, and Object.entries are crucial for object manipulation, as they allow developers to easily iterate over objects and access their keys, values, or both as arrays. These methods enhance the efficiency of handling objects in JavaScript.
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(Object.keys(obj)); // ['a', 'b', 'c']
// console.log(Object.values(obj)); // [1, 2, 3]
// console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]
//-----------------------------------------
// let parentObj = { 
//     prop1: "value1" 
//     };
    
//     let childObj = Object.create(parentObj);
//     console.log(childObj.prop1); 
    

// var x = 'John'
// var y = new String('John')
// console.log(x.__proto__.__proto__.__proto__)


// let parentObj = 
// { 
// prop1: "value1" 
// };

// let childObj = 
// { 
// prop2: "value2" 
// };

// Object.setPrototypeOf(childObj, parentObj);
// console.log(childObj.prop1);


function Animal(noOfLegs, vegetarian) {

    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  
  }
  Animal.prototype.eat = function() {
    console.log(`eating...`)
  }
  
  function Cat(noOfLegs, vegetarian, color) {
  
    Animal.call(this, noOfLegs, vegetarian)
    this.color = color;
  
  }
  
  let c1 = new Cat(4, false, 'Brown');
  c1.eat();
  
