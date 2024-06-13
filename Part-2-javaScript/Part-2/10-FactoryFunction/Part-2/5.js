//-------------------------------------------------------------------------
// Concept: Factory Function in JavaScript
// Introduction
// A factory function is a function that returns an object when called. It is a way to create and initialize objects by encapsulating the object creation process within a function. Factory functions are useful when you want to create multiple instances of objects with similar properties or when you want to abstract the object creation process.
// Detailed Explanation
// What is the concept? - A factory function is a function that encapsulates the process of creating and initializing objects. It returns a new object with specified properties and methods.

// Why is it useful? - Factory functions allow developers to create objects with a concise and readable syntax. They are particularly useful when there is a need for multiple instances of objects with similar characteristics.

// Real-world examples or analogies - Think of a factory function as an assembly line in a manufacturing plant that produces similar products with consistent features.

// Analogy -

// As our application grows, we need different ways to create Objects. How to create multiple accounts? for example.

// Let’s say a bank has to create accounts of 90 Lakh customers.

// Is it feasible to keep writing like this ? Is is scalable ?
//-------------------------------------------------------------------------
   // grouping related variables
   let account1 = {
    accountNumber : 12092903490,
    name: 'Vivek',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }
  let account2 = {
    accountNumber : 120923208900,
    name: 'Samuel',
    type: 'Current',
    balance: 300000,
    active: true,
  }
  let account3 = {
    accountNumber : 1209382692610,
    name: 'Aslam',
    type: 'Current',
    balance: 150000,
    active: true,
  }
//-------------------------------------------------------------------------
// The answer is no..

// So what could be done ?

// You will basically create a process - a system - a function - that would take in some arguments and give you a new account!!
//-------------------------------------------------------------------------
function account(accountNumber,name,type,balance,active){
    let accountDetails = {};
  
    accountDetails.accountNumber = accountNumber;
    accountDetails.name = name;
    accountDetails.type = type;
    accountDetails.balance = balance;
    accountDetails.active = active;
  
      accountDetails.printAccountDetails = function () {
      console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
    }
  
    return accountDetails;
  }
  
  let vivekAccount = account(1290337843, 'Vivek', 'Savings', 90000, true)
  
  console.log(vivekAccount) 
  /*
  {
    accountNumber: 1290337843,
    name: 'Vivek',
    type: 'Savings',
    balance: 90000,
    active: true
  }
  */
  
