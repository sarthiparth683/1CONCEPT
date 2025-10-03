// Accessing information in Arrays vs Objects
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
// console.log("gender " + user2["gender"]);

// 2. Dot Notation
// console.log("age " + user2.age);

for (let key in user2) {
    console.log(key + " - " + user2[key]);
};
