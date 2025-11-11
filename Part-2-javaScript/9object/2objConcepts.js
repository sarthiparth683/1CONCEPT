// ============================================================================
// JAVASCRIPT OBJECTS - COMPLETE GUIDE (Easy to Hard)
// ============================================================================

// 1. CREATING OBJECTS - Basic object creation
// ============================================================================
let obj = {};
obj.name = "Sarthi";
obj.age = 25;
obj.isMarried = false;

// console.log(obj.name); // John
// console.log(obj.age); // 25
// console.log(obj.isMarried); // false

// ============================================================================
// 2. OBJECT LITERAL NOTATION - Creating objects directly
// ============================================================================
let student = {
  name: "Ravi",
  age: 21,
  course: "JavaScript",
  isEnrolled: true,
};

// console.log(student.name); // Ravi
// console.log(student.age); // 21

// ============================================================================
// 3. ACCESSING OBJECT PROPERTIES - Dot Notation (simplest way)
// ============================================================================
// console.log(student.age); // 21
// console.log(student.name); // Ravi
// console.log(student.course); // JavaScript

// ============================================================================
// 4. ACCESSING OBJECT PROPERTIES - Bracket Notation
// ============================================================================
// Use bracket notation for dynamic or multi-word keys

// console.log(student["name"]); // Ravi
// console.log(student["age"]); // 21

// // Bracket notation allows spaces and special characters in keys
student["hobby space"] = "programming";
// console.log(student["hobby space"]); // programming

// ============================================================================
// 5. ADDING PROPERTIES TO OBJECTS
// ============================================================================
let user = {
  name: "Rahul",
  age: 25,
  gender: "male",
  city: "Bangalore",
};

// Method 1: Dot Notation (simpler)
user.profession = "Developer";
user.hobbies = "coding";

// Method 2: Bracket Notation (for dynamic keys)
user["Date_of_Birth"] = "02-Oct-1984";
// console.log(user);
// ============================================================================
// 6. MODIFYING OBJECT PROPERTIES
// ============================================================================
user.city = "Mumbai";
user["age"] = 26;

// console.log(user.city); // Mumbai
// console.log(user.age); // 26
// ============================================================================
// 7. DELETING PROPERTIES FROM OBJECTS
// ============================================================================
let user2 = {
  name: "Rahul",
  age: 25,
  gender: "male",
  city: "Bangalore",
  hobbies: "coding",
  marks: [25, 100, 80, 90, 80],
};

// Method 1: Using dot notation
delete user2.name;

// Method 2: Using bracket notation
delete user2["gender"];

// console.log(user2);
// ============================================================================
// 8. OBJECTS WITH ARRAYS - Storing arrays as values
// ============================================================================
let studentWithSubjects = {
  name: "John",
  age: 25,
  isMarried: false,
  subjects: ["HTML", "CSS", "JS"],
  number: [5, 8, 1, 41, 2, 98, 89],
};

// console.log(studentWithSubjects.subjects); // ["HTML", "CSS", "JS"]
// console.log(studentWithSubjects.subjects[1]); // HTML
// console.log(studentWithSubjects.number.sort((a, b) => a - b));

// ============================================================================
// 9. LOOPING THROUGH OBJECTS - for...in loop
// ============================================================================
let details = {
  name: "Cherry",
  age: 19,
  gender: "Male",
  city: "Bangalore",
};

// for (let key in details) {
//   console.log(key + " - " + details[key]);
// }

// ============================================================================
// 10. OBJECT BUILT-IN METHODS - Object.keys()
// ============================================================================
// console.log(Object.keys(student)); // ["name", "age", "course", "isEnrolled"]
// console.log(Object.keys(student).length); // gives length of object

// ============================================================================
// 11. OBJECT BUILT-IN METHODS - Object.values()
// ============================================================================
// console.log(Object.values(student)); // gives value from (key-value pair)

// ============================================================================
// 12. OBJECT BUILT-IN METHODS - Object.entries()
// ============================================================================
// Object.entries(): When you need the key-value pairs as arrays for methods like .map(), .filter(), or when working with inherited properties matters

// console.log(Object.entries(student)); // [["name", "Ravi"], ["age", 21], ...]

// // Looping through entries
// for (let [key, value] of Object.entries(student)) {
//   console.log(key, ":", value);
// }

// ============================================================================
// 13. DESTRUCTURING OBJECTS - Extracting values into variables
// ============================================================================
let student2 = {
  name: "Rahul",
  age: 25,
  gender: "male",
  city: "Bangalore",
  hobbies: "coding",
};

let { name, age, gender, city, hobbies } = student2;
// console.log(gender); // male
// console.log(name); // Rahul
// console.log(city)
// ============================================================================
// 14. NESTED OBJECTS - Objects inside objects
// ============================================================================
let user3 = {
  name: "Rahul",
  age: 25,
  gender: "male",
  city: "Bangalore",
  address: {
    state: "Karnataka",
    country: "India",
    district: "Bangalore",
    pincode: "560001",
  },
};

// // Accessing nested objects - Dot Notation
// console.log(user3.address.country); // India
// console.log(user3.address.pincode); // 560001

// // Accessing nested objects - Bracket Notation
// console.log(user3["address"]["country"]); // India
// console.log(user3["address"]["pincode"]); // 560001
// ============================================================================
// 15. OPTIONAL CHAINING - Safely accessing nested properties
// ============================================================================
let person = {
  name: "Alice",
  address: {
    city: "Kolkata",
    zip: 700001,
  },
};

// console.log(person?.address?.city); // Kolkata
// console.log(person?.profile?.email); // undefined (no error thrown)
// console.log(person?.contact?.phone); // undefined (safe access)
// ============================================================================
// 16. OBJECT METHODS (FUNCTIONS INSIDE OBJECTS)
// ============================================================================
let personData = {
  name: "John",
  age: 25,
  subjects: ["HTML", "CSS", "JS"],
  getDetails: function () {
    return `Hello, my name is ${this.name}, my age is ${this.age}`;
  },
};

// console.log(personData?.name);
// console.log(personData?.email); // undefined
// console.log(personData.getDetails());
// ============================================================================
// 17. THIS KEYWORD - Regular Functions in Objects
// ============================================================================
// var personWithMethods = {
//   name: "Alice",
//   age: 30,

//   sayRegularHello: function() {
//     console.log("Regular Hello");
//   },

//   sayRegularName: function() {
//     console.log("My Regular name is", this.name);
//     this.sayRegularHello();
//   }
// };

// personWithMethods.sayRegularName();
// ============================================================================
// 18. ARROW FUNCTIONS vs REGULAR FUNCTIONS IN OBJECTS
// ============================================================================
// using this. concept
// Method (generic term) Any function that is a property of an object
// Arrow functions inside objects are arrow methods

// var personArrow = {
//   name: "Alice",
//   age: 30,

//   // Arrow function doesn't have its own 'this'
//   sayArrowHello: () => {
//     console.log("Arrow Hello");
//     // console.log(this.name); // Won't work properly
//   },

//   // Regular function has its own 'this'
//   sayRegularHello: function () {
//     console.log("Regular Hello");
//   },

//   sayRegularName: function () {
//     this.sayArrowHello();
//     this.sayRegularHello();
//     console.log("My Regular name is", this.name);

//     // Arrow function inside method inherits 'this' or we can say lexixal/parent scope
//     var sayArrowGoodbye = () => {
//       console.log("Arrow Goodbye, still", this.name);
//     };
//     sayArrowGoodbye();
//   },
// };

// personArrow.sayRegularName();
// ============================================================================
// 19. COUNTING CHARACTER OCCURRENCES - Using objects as hashmaps
// ============================================================================
var str = "ssarthi";
var charCount = {};

for (let i = 0; i < str.length; i++) {
  if (charCount[str[i]] === undefined) {
    charCount[str[i]] = 1;
  } else {
    charCount[str[i]] = charCount[str[i]] + 1;
  }
}

// console.log(charCount);
// ============================================================================
// 20. MAPPING CHARACTERS TO NUMBERS
// ============================================================================
// function mapChar(N) {
//   let obj = {};
//   let alphabets = "abcdefghijklmnopqrstuvwxyz";

//   for (let i = 0; i < N; i++) {
//     obj[alphabets[i]] = i + 1;
//   }

//   console.log(obj);

//   for (let key in obj) {
//     console.log(key + "-" + obj[key]);
//   }
// }

// mapChar(5);
// ============================================================================
// 21. MAPPING SYMBOLS TO NUMBERS
// ============================================================================
function mapSymbols(N) {
  let obj = {};
  let str = "!@#$%^&*";

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = N++;
  }

  console.log(obj);

  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
}

// mapSymbols(5);
// ============================================================================
// 22. SHALLOW COPY - Copies only first level
// ============================================================================
// Changing shallowCopy.name does NOT affect originalUser.name.
// Changing shallowCopy.address.city changes originalUser.address.city too—they both refer to the same nested object.

// const originalUser = {
//   name: "Alice",
//   address: {
//     city: "Kolkata",
//     zip: 91829,
//   },
// };

// const shallowCopy = { ...originalUser };
// shallowCopy.name = "Bob"; // Doesn't affect original obj
// shallowCopy.address.city = "Bangalore"; // AFFECTS original (nested reference)

// console.log("Original Name:", originalUser.name); // Alice (unchanged)
// console.log("Original City:", originalUser.address.city); // Bangalore (changed!)
// console.log(originalUser);
// console.log(shallowCopy);
// ============================================================================
// 23. DEEP COPY - Copies all levels independently
// ============================================================================
// Deep Copy: fully independent objects, safe to mutate without affecting the original.Shallow Copy: only the outer layer is safe to mutate; inner (nested) properties are linked with the original.So, deep copies are the best choice when you need to ensure the original data remains untouched, even after making changes to the copy.

const user4 = {
  name: "Alice",
  address: {
    city: "Kolkata",
    zip: 91829,
  },
};

// Method 1: JSON.parse(JSON.stringify()) - Simple but has limitations
// const deepCopy = JSON.parse(JSON.stringify(user4));

// Method 2: structuredClone() - Preferred modern method
const deepCopy = structuredClone(user4);
deepCopy.name = "Charlie";
deepCopy.address.city = "Delhi";

// console.log(user4); //unchanged
// console.log(deepCopy);
// console.log("Deep Copy Name:", deepCopy.name); // Charlie
// console.log("Deep Copy City:", deepCopy.address.city); // Delhi
// console.log("Original City:", user4.address.city); // Kolkata (unchanged)
// ============================================================================
// 24. ARRAY OF OBJECTS - Working with collections
// ============================================================================
let amazon = [
  { name: "Speakers", price: 5400, rating: 4 },
  { name: "Headphones", price: 3000, rating: 3 },
  { name: "PlayStation", price: 20000, rating: 5 },
  { name: "Mixer", price: 2300, rating: 4 },
];

// // Print all product names and ratings
// for (let i = 0; i < amazon.length; i++) {
//   console.log(amazon[i].name, amazon[i].price, amazon[i].rating);
// }
// ============================================================================
// 25. FILTERING ARRAY OF OBJECTS - Basic conditions
// ============================================================================
// // Print products with rating 4
// for (let i = 0; i < amazon.length; i++) {
//   if (amazon[i].rating === 4) {
//     console.log(amazon[i].name);
//   }
// }

// // Print products with price between 2500 and 10000
// for (let i = 0; i < amazon.length; i++) {
//   if (amazon[i].price >= 2500 && amazon[i].price <= 10000) {
//     console.log(amazon[i].name, amazon[i].price);
//   }
// }

// ============================================================================
// 26. CALCULATING AVERAGE FROM ARRAY OF OBJECTS
// ============================================================================
var sum = 0;
for (let i = 0; i < amazon.length; i++) {
  sum = sum + amazon[i].rating;
}
// console.log("Total:", sum);
// console.log("Average Rating:", sum / amazon.length);

// ============================================================================
// 27. FINDING MIN/MAX IN ARRAY OF OBJECTS
// ============================================================================
// Finding minimum price
let minPrice = amazon[0].price;
for (let i = 0; i < amazon.length; i++) {
  if (minPrice > amazon[i].price) {
    minPrice = amazon[i].price;
  }
}
// console.log("Minimum Price:", minPrice);

// Finding maximum price
let maxPrice = amazon[0].price;
for (let i = 0; i < amazon.length; i++) {
  if (maxPrice < amazon[i].price) {
    maxPrice = amazon[i].price;
  }
}
// console.log("Maximum Price:", maxPrice);

// ============================================================================
// 28. COMPLEX NESTED STRUCTURES - Objects with arrays and nested objects
// ============================================================================
let studentData = {
  name: "Rajesh",
  grade: "A1",
  section: "A",
  marks: [
    { maths: 91, science: 95, english: 85 },
    { maths: 82, science: 98, english: 88 },
  ],
  hobbies: ["Dancing", "Singing"],
};

// console.log(studentData.marks[0].maths); // 31
// console.log(studentData.marks[1]["english"]); // 82
// console.log(studentData["marks"][1].science); // 72

// for (let key in studentData) {
//   console.log(key, "-", studentData[key]);
// }
// ============================================================================
// 29. EMPLOYEE DATA OPERATIONS - Real-world example
// ============================================================================
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// Extract specific employee information
function employeeInformation(employees) {
  const secondEmployeeName = employees[1].name;
  const secondEmployeeDepartment = employees[1].department;
  return { secondEmployeeName, secondEmployeeDepartment };
}
// console.log(employeeInformation(employees));

// Calculate average salary
function averageSalary(employees) {
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum += employees[i].salary;
  }
  return sum / employees.length;
}
// console.log("Average Salary:", averageSalary(employees));

// Extract third employee info with additional data
function thirdEmployeeInfo(employees) {
  let thirdEmployeeName = employees[2].name;
  let thirdEmployeeAge = employees[2].age;
  let thirdEmployeeSalary = employees[2].salary;
  let bonus = 7000;
  return { thirdEmployeeName, thirdEmployeeAge, thirdEmployeeSalary, bonus };
}
// console.log(thirdEmployeeInfo(employees));

// ============================================================================
// 30. FINDING HIGHEST AND LOWEST USING MATH METHODS
// ============================================================================
const employees2 = [
  { name: "John Doe", age: 30, department: "HR", salary: 54123 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 65123 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 75123 },
];

// function findSalaryExtremes(employees) {
//   let salaries = [];
//   for (let i = 0; i < employees.length; i++) {
//     salaries.push(employees[i].salary);
//   }
//   console.log(salaries);
//   let max = Math.max(...salaries);
//   let min = Math.min(...salaries);
//   console.log("Max Salary:", max);
//   console.log("Min Salary:", min);
// }

// findSalaryExtremes(employees2);
// ============================================================================
// 31. ARRAY DESTRUCTURING WITH OBJECTS - Swapping elements
// ============================================================================
// function destructuringToSwap(employees) {
//   let [first, middle, last] = employees;
//   // console.log(first,middle)
//   let swappedArray = [last, middle, first];
//   console.log(swappedArray);
// }
// destructuringToSwap(employees2);
// ============================================================================
// 32. CHECKING PROPERTY EXISTENCE - hasOwnProperty and 'in' operator
// ============================================================================
const testObj = { name: "Test", age: 25 };

// console.log(testObj.hasOwnProperty("name")); // true .hasOwnProperty() is a method that checks property as its own (not inherited from the prototype chain).
// console.log(testObj.hasOwnProperty("salary")); // false
// console.log("age" in testObj); // true :- "in" operator checks if a property exists in the object or its prototype chain.
// console.log("city" in testObj); // false

// ============================================================================
// 33. OBJECT.ASSIGN() - Merging objects
// ============================================================================
const target = { a: 1, b: 2 };
const source = { c: 4, d: 4 };
const merged = Object.assign({}, target, source);
// console.log(merged);

// Alternative: Using spread operator
const mergedSpread = { ...target, ...source };
// console.log(mergedSpread);
// ============================================================================
// 34. OBJECT.SEAL() - addition or deletion not allowed only modifing properties
// ============================================================================
const sealedObj = Object.seal({ name: "Sealed", age: 25 });
sealedObj.age = 30; // Can modify existing properties
sealedObj.city = "Mumbai"; // Can't add new properties
delete sealedObj.name; // Can't delete properties
// console.log(sealedObj); // { name: "Sealed", age: 30 }
// ============================================================================
// 35. OBJECT.FREEZE() - completely immutable no deleting, adding or modifing are allowed
// ============================================================================
const frozenObj = Object.freeze({ name: "Frozen", age: 30 });
frozenObj.city = "Delhi"; // Won't add (silently fails)
frozenObj.age = 40; // Won't change (silently fails)
delete frozenObj.name; // Won't delete (silently fails)
console.log(frozenObj); // { name: "Frozen", age: 30 }

// ============================================================================
// END OF JAVASCRIPT OBJECTS GUIDE
// ============================================================================
