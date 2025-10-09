// ## Shallow copy and deep copy of an object


const user = {
  name: "Alice",
  address: {
    city: "Kolkata",
    zip: 91829,
  },
};

// const shallowCopy = { ...user };
// shallowCopy.name = "Bob";
// shallowCopy.address.city = "Bangalore";

// console.log("Name", user.name);
// console.log("City", user.address.city);

// const deepCopy = JSON.parse(JSON.stringify(user));
const deepCopy = structuredClone(user);
deepCopy.name = "Charlie";
deepCopy.address.city = "Pune";
console.log(user.address.city);
