// Accessing information in Arrays vs Objects
// Code 2 : Accessing the information gender in arrays vs objects

// Arrays
var user1 = ["Rahul", 25, "male", "Bangalore", "coding"];
console.log("Array => " + user1[2]);

// Objects
var user2 = {
    name: "Rahul",
    age: 25,
    gender: "male",
    city: "Bangalore",
    hobbies: "coding",
    marks: [25, 100, 80, 90, 80]
};

// 1. Bracket Notation
console.log("gender " + user2["gender"]);
console.log("marks " + user2["marks"]);
console.log("marks2 " + user2["marks"][2]);
console.log(user2["marks"].length);

// 2. Dot Notation
console.log("gender " + user2.gender);
console.log("marks " + user2.marks);
console.log("marks1 " + user2.marks[1]);
console.log(user2.marks.length);

