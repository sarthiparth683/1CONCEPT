let student = {
    name: "Rahul",
    age: 25,
    gender: "male",
    city: "Bangalore",
    hobbies: "coding"
};
console.log(student);

// Accesing object data:-
// METHOD 1:- Bracaket Notation also helps in assigning value
console.log(student["name"]);
console.log(student["age"]);

// METHOD 2:- Dot Notation
console.log(student.name);
console.log(student.age);

// Updating Object:-
student["age"] = 27;
student.city = "Hyderabad";
console.log(student); 



