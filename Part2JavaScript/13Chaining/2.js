// Optional Chaining:
// Optional chaining (?.) is an advanced feature in JavaScript that allows you to safely access properties and call methods on an object without worrying about whether the property or method exists. It helps to prevent runtime errors and makes your code more robust when dealing with complex data structures.

const user = {
    name: 'John',
    address: {
        street: 'Main St',
        city: 'Hometown'
    }
};
console.log(user.address?.city);
console.log(user.address.street);
console.log(user?.address?.zipcode);
