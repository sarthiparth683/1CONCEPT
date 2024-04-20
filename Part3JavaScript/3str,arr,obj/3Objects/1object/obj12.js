// Problem 5  Loops with Array of Objects
var classroom = [
    { name: "Babu Rao", age: 40 },
    { name: "Munna bhai", age: 30 },
    { name: "popat lal", age: 35 }
];
// console.log(classroom[0].name);
// console.log(classroom[1].name);

for (var i = 0; i < classroom.length; i++) {
    console.log(classroom[i].name);
    console.log(classroom[i].age);
}
