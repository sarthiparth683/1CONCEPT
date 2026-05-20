// ============================================================================
// JAVASCRIPT OBJECTS - Objects in JavaScript are like real-world records, a collection of key-value pairs.
// ============================================================================
// 1. CREATING OBJECTS - Basic object creation
// ============================================================================
let obj = {};
obj.name = "Sarthi";
obj.age = 25;
obj.isMarried = false;

console.log(obj.name);
console.log(obj["age"]);
console.log(obj.age);
console.log(obj.isMarried);
// ============================================================================
// 2. OBJECT LITERAL NOTATION - Creating objects directly
// ============================================================================
let student = {
  name: "Ravi",
  age: 21,
  course: "JavaScript",
  isEnrolled: true,
};

console.log(student.name);
console.log(student.age);
console.log(student["course"]);
// ============================================================================
// 3. ACCESSING OBJECT PROPERTIES - Dot Notation (simplest way)
// ============================================================================
console.log(student.age);
console.log(student.name);
console.log(student.course);
// ============================================================================
// 4. ACCESSING OBJECT PROPERTIES - Bracket Notation
// ============================================================================
// Use bracket notation for dynamic or multi-word keys

console.log(student["name"]);
console.log(student["age"]);

// Bracket notation allows spaces and special characters in keys
student["hobby space"] = "programming";
console.log(student["hobby space"]);
console.log(student);
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
user["Date_of_Birth"] = "7-Oct-1984";
user["xyz"] = "xyz";
console.log(user);
// ============================================================================
// 6. MODIFYING OBJECT PROPERTIES
// ============================================================================
user.city = "Mumbai";
user["age"] = 26;

console.log(user.city);
console.log(user.age);
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

console.log(user2);
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

console.log(studentWithSubjects.subjects);
console.log(studentWithSubjects.subjects[1]);
console.log(studentWithSubjects.number);
console.log(studentWithSubjects.number.sort((a, b) => a - b));
console.log(studentWithSubjects.number.sort((a, b) => b - a));
// ============================================================================
// 9. LOOPING THROUGH OBJECTS - for...in loop
// ============================================================================
let details = {
  name: "Cherry",
  age: 19,
  gender: "Male",
  city: "Bangalore",
};

for (let key in details) {
  console.log(key);
  console.log(details[key]);
}
// ============================================================================
// 10. OBJECT BUILT-IN METHODS - Object.keys()
// ============================================================================
console.log(Object.keys(student));
console.log(Object.keys(student).length);
// ============================================================================
// 11. OBJECT BUILT-IN METHODS - Object.values()
// ============================================================================
console.log(Object.values(student));
// ============================================================================
// 12. OBJECT BUILT-IN METHODS - Object.entries()
// ============================================================================
// Object.entries(): When you need the key-value pairs as arrays for methods like .map(), .filter(), or when working with inherited properties matters
console.log(Object.entries(student));

// Looping through entries
for (let [key, value] of Object.entries(student)) {
  console.log(key, ":", value);
}

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}
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
console.log(gender);
console.log(name);
console.log(city);
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

console.log(user3.address.country);
console.log(user3.address.pincode);

// Accessing nested objects - Bracket Notation
console.log(user3["address"]["country"]);
console.log(user3["address"]["pincode"]);
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

console.log(person?.address?.city);
console.log(person?.profile?.email);
console.log(person?.address?.zip);
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

console.log(personData?.name);
console.log(personData?.["name"]);
console.log(personData?.email);
console.log(personData.getDetails());
console.log(personData?.["getDetails"]());
// ============================================================================
// 17. THIS KEYWORD - Regular Functions in Objects
// ============================================================================
var personWithMethods = {
  name: "Alice",
  age: 30,

  sayRegularHello: function () {
    return "Regular Hello";
  },

  sayRegularName: function () {
    return `My Regular name is, ${this.name}--${this.sayRegularHello()}`;
  },
};

console.log(personWithMethods.sayRegularHello());
console.log(personWithMethods.sayRegularName());
// ============================================================================
// 18. ARROW FUNCTIONS vs REGULAR FUNCTIONS IN OBJECTS
// ============================================================================
var personArrow = {
  name: "Alice",
  age: 30,

  // Arrow function doesn't have its own 'this'
  sayArrowHello: () => {
    console.log(this.name); // Won't work properly
  },

  // Regular function has its own 'this'
  sayRegularHello: function () {
    console.log(this.name, this.age);
  },

  sayRegularName: function () {
    console.log(this.name);
    this.sayArrowHello();
    this.sayRegularHello();

    var sayArrowGoodbye = () => {
      console.log("Arrow Goodbye, still", this.name);
    };
    sayArrowGoodbye();
  },
};

personArrow.sayRegularName();
// ============================================================================
// 19. COUNTING CHARACTER OCCURRENCES - Using objects as hashmaps
// ============================================================================
console.log(undefined);
console.log(0);
// -------------------------------
var str = "sartyyhizz";
var obj2 = {};

for (let i = 0; i < str.length; i++) {
  obj2[str[i]] = (obj2[str[i]] || 0) + 1;
  // if (obj2[str[i]] === undefined) {
  //   obj2[str[i]] = 1;
  // } else {
  //   obj2[str[i]] = obj2[str[i]] + 1;
  // }
}

console.log(obj2);
// ============================================================================
// 20. MAPPING CHARACTERS TO NUMBERS
// ============================================================================
function mapChar(N) {
  let obj = {};
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < N; i++) {
    obj[alphabets[i]] = i + 1;
  }

  console.log(obj);

  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
}

mapChar(5);
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

mapSymbols(5);
// ============================================================================
// 22. SHALLOW COPY - Copies only first nested level
// ============================================================================
const originalUser = {
  name: "Alice",
  address: {
    city: "Kolkata",
    zip: 91829,
  },
};

const shallowCopy = { ...originalUser };
shallowCopy.name = "Bob"; // Doesn't affect original obj
shallowCopy.address.city = "Bangalore"; // AFFECTS original (nested reference)

console.log(originalUser.name);
console.log(originalUser.address.city);
console.log(originalUser);
console.log(shallowCopy);
// ============================================================================
// 23. DEEP COPY - Copies all levels independently
// ============================================================================
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

console.log(user4);
console.log(deepCopy);
console.log(deepCopy.name);
console.log(deepCopy.address.city);
console.log(user4.address.city);
// ============================================================================
// 24. ARRAY OF OBJECTS - Working with collections
// ============================================================================
let amazon = [
  { name: "Speakers", price: 5400, rating: 4 },
  { name: "Headphones", price: 3000, rating: 3 },
  { name: "PlayStation", price: 20000, rating: 5 },
  { name: "Mixer", price: 2300, rating: 4 },
];

let res = amazon.filter((el) => el.name === "Speakers");
console.log(res);
// ============================================================================
// 25. FILTERING ARRAY OF OBJECTS - Basic conditions
// ============================================================================
let rating = amazon.filter((el) => el.rating === 4);
console.log(rating);

// Print products with price between 2500 and 10000
let price = amazon.filter((el) => el.price >= 2500 && el.price <= 10000);
console.log(price);
// ============================================================================
// 26. CALCULATING AVERAGE FROM ARRAY OF OBJECTS
// ============================================================================
var sum = 0;
for (let i = 0; i < amazon.length; i++) {
  sum = sum + amazon[i].rating;
}

console.log("Total:", sum);
console.log("Average Rating:", sum / amazon.length);
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
console.log("Minimum Price:", minPrice);

// Finding maximum price
let maxPrice = amazon[0].price;
for (let i = 0; i < amazon.length; i++) {
  if (maxPrice < amazon[i].price) {
    maxPrice = amazon[i].price;
  }
}
console.log("Maximum Price:", maxPrice);
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

let sample = "sample";
studentData[sample] = sample;

console.log(studentData["marks"][1]["maths"]);
console.log(studentData);
// ============================================================================
// 29. EMPLOYEE DATA OPERATIONS - Real-world example
// ============================================================================
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

function employeeInformation(employees) {
  const secondEmployeeName = employees[1].name;
  const secondEmployeeDepartment = employees[1].department;
  console.log(secondEmployeeName, secondEmployeeDepartment);
}
employeeInformation(employees);

// Calculate average salary
function averageSalary(employees) {
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum += employees[i].salary;
  }
  console.log(sum / employees.length);
}
averageSalary(employees);

// Extract third employee info with additional data
function thirdEmployeeInfo(employees) {
  let thirdEmployeeName = employees[2].name;
  let thirdEmployeeAge = employees[2].age;
  let thirdEmployeeSalary = employees[2].salary;
  let bonus = 7000;
  console.log({
    thirdEmployeeName,
    thirdEmployeeAge,
    thirdEmployeeSalary,
    bonus,
  });
}
thirdEmployeeInfo(employees);
// ============================================================================
// 30. FINDING HIGHEST AND LOWEST USING MATH METHODS
// ============================================================================
const employees2 = [
  { name: "John Doe", age: 30, department: "HR", salary: 54123 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 65123 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 75123 },
];

function findSalaryExtremes(employees) {
  let salaries = [];
  for (let i = 0; i < employees.length; i++) {
    salaries.push(employees[i].salary);
  }
  console.log(salaries);

  console.log(Math.max(...salaries));
  console.log(Math.min(...salaries));
}

findSalaryExtremes(employees2);
// ============================================================================
// 31. ARRAY DESTRUCTURING WITH OBJECTS - Swapping elements
// ============================================================================
function destructuringToSwap(employees) {
  let [first, middle, last] = employees;
  console.log(first);

  let swappedArray = [last, middle, first];
  console.log(swappedArray);
}
destructuringToSwap(employees2);
// ============================================================================
// 32. CHECKING PROPERTY EXISTENCE - hasOwnProperty and 'in' operator
// ============================================================================
const testObj = { name: "Test", age: 25 };

console.log(testObj.hasOwnProperty("name")); // .hasOwnProperty() is a method that checks property as its own (not inherited from the prototype chain).

console.log(testObj.hasOwnProperty("salary")); // false
console.log("age" in testObj); // "in" operator checks if a property exists in the object or its prototype chain.
console.log("city" in testObj);
// ============================================================================
// 33. OBJECT.ASSIGN() - Merging objects
// ============================================================================
const target = { a: 1, b: 2 };
const source = { c: 3, d: 4 };
const merged = Object.assign({}, target, source);
console.log(merged);

// Alternative: Using spread operator
const mergedSpread = { ...target, ...source };
console.log(mergedSpread);
// ============================================================================
// 34. OBJECT.SEAL() - addition or deletion not allowed only modifing properties
// ============================================================================
const sealedObj = Object.seal({ name: "Sealed", age: 25 });
sealedObj.age = 30; // Can modify existing properties
sealedObj.city = "Mumbai"; // Can't add new properties
delete sealedObj.name; // Can't delete properties
console.log(sealedObj);
// ============================================================================
// 35. OBJECT.FREEZE() - completely immutable no deleting, adding or modifing are allowed
// ============================================================================
let obj4 = { name: "Frozen", age: 30 };
const frozenObj = Object.freeze(obj4);
frozenObj.city = "Delhi"; // Won't add (silently fails)
frozenObj.age = 40; // Won't change (silently fails)
delete frozenObj.name; // Won't delete (silently fails)
console.log(frozenObj);
// ============================================================================
