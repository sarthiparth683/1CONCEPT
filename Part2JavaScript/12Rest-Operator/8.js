// Rest and Spread:
// The rest operator in JavaScript allows us to collect multiple function arguments into an array. It is like having a basket to hold all the extra items you want to carry.

// The spread operator in JavaScript allows us to expand an array or object in place. It is like unpacking a suitcase and placing its contents separately.


function trackGuests(first, ...rest) {
    console.log(first, rest);
    // rest is guaranteed to be an array
}
trackGuests("John", "Jane", "Alice", "Bob", "Charlie");

function doSomething(first, second, ...rest) {
    console.log(first, second, rest);
    // rest is guaranteed to be an array
}
doSomething("one", "two", "three", "four", "five");
