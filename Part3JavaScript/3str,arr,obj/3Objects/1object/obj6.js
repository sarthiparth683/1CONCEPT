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
 
// Adding data in object
// Ist Way bracket notation
user2['Date_of_Birth'] = "02-Oct-1984";
user2["city"]="kolkata";
// IInd Way dot notation
user2.Date_of_Birth = "02-Oct-1986";

console.log(user2);

