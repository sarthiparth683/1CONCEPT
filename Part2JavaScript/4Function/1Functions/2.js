// Difference Between Parameters and Arguments :

// Parameters are variables listed as a part of the function definition.

// Arguments are values passed to the function when it is invoked.

function sum( a, b, c ) {}; // a, b, and c are the parameters

sum( 1, 2, 3 ); // 1, 2, and 3 are the arguments


// Stored by Value-Function Arguments 

function modifyValue(value) {
    value = "Modified";
}

let originalValue = "Original";
console.log(originalValue);

let a = modifyValue(originalValue);
console.log(a);

//Guess the Output for **originalValue**: __________