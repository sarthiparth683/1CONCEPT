let student = {
    name: "Rahul",
    age: 25,
    gender: "male",
    city: "Bangalore",
    hobbies: "coding"
};
// Accesing object data:-

// METHOD 1:- Bracaket Notation also helps in assigning value
console.log(student["name"]);
console.log(student["age"]);

// METHOD 2:- Dot Notation
console.log(student.name);
console.log(student.age);

// METHOD 3:- Destructuring
let {name,age,gender,city,hobbies} = student;
console.log(gender);

// Adding data in obj Object:-
student["6location"] = "Mumbai";
student["7data"]= "7added";
console.log(student); 




 /// Objects
    // Data is stored in key value
    //   let obj = {}
    //   obj.name = "John";
    //   obj.age = 25;
    //   obj.isMarried = false;
    //   obj.subjects = ["HTML", "CSS", "JS"];
    //   obj.address = {
    //     state:"UP",
    //     district:"Varnasi",
    //     colony:"Kailash Nagar"
    //   }
    //   obj.getDeatils = function(){
    //     // Hello My Name is John, my age is 25
    //     return `Hello My Name is ${obj.name}, my age is ${obj.age}`;
    //     console.log("Hi")
    //   }
    /// The function written in the object is called as Object Method <<<<===== IMP IMP IMP IMP
    //   console.log(obj.name)
    //   console.log(obj.getDeatils())
    // let rect = {
    //     length:200,
    //     width:300,
    // }
    // // create an obj method, that calucalates area
    // rect.printArea = function(){
    //     console.log("The area is", rect.length*rect.width)
    // }
    // rect.printArea()
    //   function assign(name, age){
    //     let obj = {};
    //     obj[name] = age;
    //     console.log(obj)
    //     // {Raj:25}
    //   }
    //   assign("Raj", 25)
 


