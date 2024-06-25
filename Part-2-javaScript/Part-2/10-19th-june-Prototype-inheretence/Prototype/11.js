//Method 1, using object and Object.create
let dad = {
    height :">6ft",
    color : "Brownish Black",
    hairColor : "Grayish White"
};
let son = Object.create(dad);
son.name = "John";
console.log("dad-",dad);
console.log("son-",son); // here dad's property is saved in prototype of son's object 