// Conclusion
// By using optional chaining, you can write more resilient code that gracefully handles situations where certain properties may be absent. It helps to prevent runtime errors and makes your code more robust when dealing with complex data structures.

// Optional Chaining:
// Introduction
// Optional chaining (?.) is an advanced feature in JavaScript that allows you to safely access properties and call methods on an object without worrying about whether the property or method exists. It is particularly useful when working with nested objects or when accessing properties that may be null or undefined












const user = {name: 'John', address: {street: 'Main St', city: 'Hometown'}};
console.log(user?.address?.city); // Hometown
console.log(user?.address?.zipcode); // undefined
