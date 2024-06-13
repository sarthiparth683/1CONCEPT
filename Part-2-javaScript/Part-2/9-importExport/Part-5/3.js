// Animal
//     ├── noOfLegs <number>
//     ├── vegetarian <boolean>
//     └── eat() <function that logs `eating...` >
//     └── greet() <function that logs `Hi, I have <noOfLegs> legs.` >
// Convert this 


function animal(noOfLegs, vegetarian) {
    let obj = {};
    obj.noOfLegs = noOfLegs;
    obj.vegetarian = vegetarian;
    return obj;
}

// example invocation
let a1 = animal(4, true);
a1.eat() // eating...
a1.greet() // Hi, I have 4 legs.