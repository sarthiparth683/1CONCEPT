// Problem 8:-
let data = {
    name: "Rajesh",
    grade: "X",
    section: "A",
    marks: [
        { maths: 31, science: 41, english: 51 },
        { maths: 62, science: 72, english: 82 }
    ],
    hobbies: ["Dancing", "Singing"]
};
// console.log(data.marks[0].maths); // getting induvidually 
for (let key in data) {
    console.log(key, " - ", data[key]);
};