// Delete Information in Objects 

// Objects
var user2 = {
    name: "Rahul",
    age: 25,
    gender: "male",
    city: "Bangalore",
    hobbies: "coding",
    marks: [25, 100, 80, 90, 80]
};

// Ist way
delete user2["gender"];

// IInd way
delete user2.marks;

console.log(user2);

