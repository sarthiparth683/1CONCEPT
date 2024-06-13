// Object inside Object  

// Objects
var user2 = {
    name: "Rahul",
    age: 25,
    gender: "male",
    city: "Bangalore",
    hobbies: "coding",
    marks: [25, 100, 80, 90, 80],
    address: {
        state: "Uttarakhand",
        country: "india",
        district: "Dehradun",
        pincode: "249201"
    }
};

//Bracket Notation
console.log(user2["address"]);
console.log(user2["address"]["country"]);
console.log(user2["address"]["pincode"]);

// Dot Notation
console.log(user2.address);
console.log(user2.address.country);
console.log(user2.address.pincode);

