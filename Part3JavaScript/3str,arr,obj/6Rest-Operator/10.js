// 1. Combining Arrays: Define a function combiningArrays that takes two arrays, 'fruits' and 'vegetables', as parameters. Create a new array 'groceries' by combining both arrays using the spread operator. Return the 'groceries' array.
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
function combiningArrays(fruits, vegetables) {
    const groceries = [...fruits, ...vegetables];
    return groceries;
};
console.log(combiningArrays(fruits, vegetables));
// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]




// 2. Cloning Objects: Define a function cloningObjects that takes an object 'person' with properties 'name', 'age', and 'address' as a parameter. Create a new object 'personCopy' by cloning the 'person' object using the spread operator. Return the 'personCopy' object.
//Example Invocation:
const person = {
    name: "John",
    age: 30,
    address: "123 Main St"
};
function cloningObjects() {
    const personCopy = {
        ...person,
    };
    return personCopy;
}
console.log(cloningObjects());
// Output: { name: "John", age: 30, address: "123 Main St" }


// 3. Merging Objects: Define a function mergingObjects that takes two objects, 'student' and 'course', as parameters. Create a new object 'studentWithCourse' by merging the properties of both objects using the spread operator. Return the 'studentWithCourse' object.
//Example Invocation:
const student = {
    name: "Alice",
    age: 20
};
const course = {
    courseName: "Math",
    teacher: "Mr. Smith"
};
function mergingObjects(student, course) {
    const studentWithCourse = {
        ...student,
        ...course

    }
    return studentWithCourse;
};
console.log(mergingObjects(student, course));
// Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }


// 4. Combining Nested Arrays: Define a function combiningNestedArrays that takes two arrays, 'array1' and 'array2', as parameters. Create a new array 'combinedArray' by combining the nested arrays from 'array1' and 'array2' using the spread operator. Return the 'combinedArray' array.
//Example Invocation:

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];
function combiningNestedArrays(array1, array2) {
    const combinedArray = [...array1, ...array2];
    return combinedArray;
}
console.log(combiningNestedArrays(array1, array2));
// Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
