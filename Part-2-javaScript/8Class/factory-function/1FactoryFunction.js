function animal(noOfLegs, vegetarian) {
  let obj = {};
  obj.noOfLegs = noOfLegs;
  obj.vegetarian = vegetarian;
  obj.eat = function () {
    console.log("eating..");
  };
  obj.greet = function () {
    console.log("greetings..");
  };
  return obj;
}

let animal1 = animal(4, true);
// console.log(animal1);
// console.log(animal1.vegetarian);
// animal1.eat();
// console.log(animal.eat()); // throws error
// animal1.greet();
//---------------------------------------------------------------------------
function Bird(name, noOfLegs, vegetarian, canFly, beak) {
  let birdObj = animal(noOfLegs, vegetarian);// here animal is inhereted
  birdObj.name = name;
  birdObj.canFly = canFly;
  birdObj.beakType = beak;
  return birdObj;
};
let b1 = Bird("Falcon", 2, true, false, "long");
let b2 = Bird("vulture", 8, true, true, "strong");
let b3 = Bird("Eagle", 4, false, true, "Fly High");
// console.log("Bird-1", b1);
// console.log("Bird-2", b2);
// console.log("Bird-3", b3);
//--------------------------------------------------------------------------------------