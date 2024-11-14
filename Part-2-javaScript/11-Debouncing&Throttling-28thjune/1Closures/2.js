// Student Activities
// Guess the out output of below code snippet
function outerFunction() {
    let x = 10;
    function innerFunction() {
        return x += 1;
    };
    return innerFunction;
};
let f1 = outerFunction();
let f2 = outerFunction();
console.log(f1());      //11
console.log(f1());      //12
console.log(f1());      //13
console.log(f2());      //11
console.log(f2());      //12
// Calling f1 multiple times increments the shared x (in the context of f1) by 1 each time.
// Calling f2 separately increments the shared x (in the context of f2) by 1 each time.
// f1 and f2 have their own separate instances of innerFunction with independent contexts.
// Calling f1 and f2 increments their respective instances of x separately.
//--------------------------------------------------------------------------------------------