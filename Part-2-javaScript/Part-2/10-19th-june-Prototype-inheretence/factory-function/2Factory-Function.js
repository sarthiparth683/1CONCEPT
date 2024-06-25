
//   Task 2:
function animal(noOfLegs, vegetarian) {
  let obj = {};
  obj.noOfLegs = noOfLegs;
  obj.vegetarian = vegetarian;
  obj.eat = function () {
    console.log("eating..")
  }
  obj.greet = function () {
    console.log("greetings..")
  }
  return obj;
};
function Bird(noOfLegs, vegetarian, canFly) {
  let birdObj = animal(noOfLegs, vegetarian);
  birdObj.canFly = canFly;
  return birdObj;
};
let b1 = Bird(2, true, false);
console.log(b1);
b1.eat();