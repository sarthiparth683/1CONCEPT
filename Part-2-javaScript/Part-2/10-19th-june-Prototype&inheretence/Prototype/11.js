//Method 1, using object and Object.create
let dad = {
    height :">6ft",
    color : "Brownish Black",
    hairColor : "Grayish White"
};
//we are creating a copy of obj dad,then we added another key called, as name in the copied object..
let son = Object.create(dad);
son.name = "John";
console.log("dad-",dad);
console.log("son-",son); // here dad's property is saved in prototype of son's object