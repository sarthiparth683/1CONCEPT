// Loops in Objects for-in loop.
var details = {
    name: "Cherry",
    age: 19,
    obj: {
        key1: "1",
        key2: "2",
        key3: "3"
    },
    gender: "Male",
    array: ["Singing", "Dancing"],
    city: "Bangalore"
};

for (var key in details) {
    console.log(key, '-', details[key]);
}
// console.log(details.name);
// console.log(details["age"]);
