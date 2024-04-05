// Code 3: Add the date of birth field in the given object.

// Objects
var user2 = {
    name : "Rahul",
    age  : 25,
    gender: "male",
    city  : "Bangalore",
    hobbies: "coding",
    marks : [25, 100, 80, 90, 80]
};

// Ist Way
user2['Date_of_Birth'] = "02-Oct-1984";

// IInd Way
user2.Date_of_Birth = "02-Oct-1984";

console.log(user2);

