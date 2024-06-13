// Use for...in loops :- used for objects
const person = {
    name: "Alexander",
    age: 30,
    gender: "male",
    Profession: "warrior"
};
for (const key in person) {
    // console.log(key, person[key]);
}
for (const key of person) {
    // console.log(key, person[key]);    // for of is not for object
}