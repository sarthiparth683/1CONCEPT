// Concept: Objects in JavaScript
let account1 = {
  accountNumber: 12092903490,
  name: 'Vivek',
  type: 'Simple Saving',
  balance: 100000,
  active: true,
};
console.log(account1);
// Passing into a Function as an Argument
function printAccountDetails(obj) {
  console.log('Name: ', obj.name,
    'Type: ', obj.type,
    'Active: ', obj.active,
    'Bal: ', obj.balance);
};
printAccountDetails(account1);
//------------------------------------------------------------------------------------------
// Related Functions as Object Methods,this time function is inside the object as key value pair
let account2 = {
  name: 'Abhishek',
  accountNumber: 12092903490,
  type: 'Preferred Savings',
  balance: 100000,
  active: true,
  printAccountDetails: function () {
    console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
  }
};
account2.printAccountDetails();
//---------------------------------------------------------------------------------------------
