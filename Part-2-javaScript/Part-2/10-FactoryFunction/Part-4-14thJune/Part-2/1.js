// Concept: Objects in JavaScript
// Introduction
// Objects in JavaScript are a complex data type that allows developers to store and organize related data and functions. They consist of properties (key-value pairs) and play a crucial role in structuring and organizing code.
// Detailed Explanation
// What is the concept? - An object is a composite data type that enables the grouping of related data and functions. It is characterized by properties, each having a key-value pair, allowing flexibility in data representation and manipulation.
// Why is it useful? - Objects are useful for organizing and managing code more effectively. They provide a way to encapsulate related data and functions, enhancing modularity, reusability, and code readability.
// Real-world examples or analogies - Think of an object like a real-world entity such as a car, where properties represent attributes (color, model, etc.), and methods represent actions (start, stop, etc.).
// Code Implementation | Examples
// What is object and Why do we use objects ?
// Contain properties (key-value pairs). Value can be of any type including primitives, objects, functions and arrays.
// Grouping Related Variables
// Grouping Related Variables

let account = {
  accountNumber: 12092903490,
  name: 'Vivek',
  type: 'Simple Saving',
  balance: 100000,
  active: true,
};
// Passing into a Function as an Argument
function printAccountDetails(obj) {
  console.log('Name: ', obj.name, 'Type: ', obj.type, 'Active: ', obj.active, 'Bal: ', obj.balance);
};
printAccountDetails(account);
//---------------------------------------------------------------------------------------

let account1 = {
  name: 'Zedd',
  accountNumber: 12092903490,
  type: 'Preferred Savings',
  balance: 100000,
  active: true,
  printAccountDetails: function () {
    console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
  }
};
account1.printAccountDetails();
//----------------------------------------------------------------------------------------------
// Student Activities
// Activity 1: Modify Object Properties
// Modify the properties of the account object and observe how it affects the behavior of related functions.
// Conclusion
// Objects provide a powerful way to structure and organize code, making it more modular, reusable, and easier to understand. They allow you to group related data and functions together, providing a clean and organized approach to programming.