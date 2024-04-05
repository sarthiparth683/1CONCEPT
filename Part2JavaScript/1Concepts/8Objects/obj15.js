// Problem 8 : Storing Student Information with Marks in different exams.  
// To access the value of maths, we need to start from outside i.e data and then marks then subject
// eg : To access maths marks
// data.marks[0].maths

var data = {
    name: "Rajesh",
    grade: "X",
    section: "A",
    marks: [
        { maths: 31, science: 41, english: 51 },
        { maths: 62, science: 72, english: 82 }
    ],
    hobbies: ["Dancing", "Singing"]
};
console.log(data.marks[0].maths);
console.log(data.marks[1].maths);
console.log(data.marks[0].english);
console.log(data.marks[1].english);
console.log(data.marks[0].science);
console.log(data.marks[1].science);