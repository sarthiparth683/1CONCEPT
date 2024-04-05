// Loops in Objects
// We have a special loop to iterate in objects.
// This special loop is known as, for-in loop.

// Consider the details object only.
var details = {
    name: "Cherry",
    age: 19,
    gender: "Male",
    city: "Bangalore",
    hobbies: ["Singing", "Dancing"]
};

for (var key in details) {
    console.log(key, ' ', details[key]);
    // console.log(details[key]);
}
