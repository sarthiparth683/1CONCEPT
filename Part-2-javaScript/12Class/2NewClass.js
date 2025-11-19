// 🔹 Bank (Parent Class) teaches: Constructor, Private properties, Static vs non-static, Static block, Static methods, Factory method, Encapsulation via getters & setters, Instance methods

// 🔹 Employee (Child Class) teaches: Inheritance (extends), Calling parent constructor (super()), Overriding methods, Private child fields, Protected convention (_department), Child-level getters, setters, and methods

// ========================================================================
// CLASS 1: BANK (PARENT CLASS)
// ========================================================================
class Bank {
  // STATIC PROPERTY (public)-Belongs to the class itself, not to objects. Shared across ALL objects. Used for system-level information.
  static bankingSystem = "Reserve Banking Model";
  // --------------------------------------------------------------------
  // PRIVATE STATIC PROPERTY (#)-Same as static, but also private. Only the class itself can access it. Perfect for internal counters, secrets, logs, etc.
  static #totalBanks = 0;
  // --------------------------------------------------------------------
  // STATIC BLOCK-Runs ONCE when the class is loaded. Good for initialization, logging, configuration.
  static {
    console.log(
      "🏦 Bank System Initialized...Runs ONCE when the class is loaded"
    );
  }
  // --------------------------------------------------------------------
  // PRIVATE FIELDS (#)- These cannot be accessed directly from outside the object. TRUE ENCAPSULATION in JavaScript. Prevents accidental or unauthorized modification. Only methods inside this class can read/write these fields.
  #bankCode;
  #assets;
  // --------------------------------------------------------------------
  // CONSTRUCTOR-Runs automatically when a new object is created. Initializes object properties. Public properties are accessible from anywhere.
  constructor(name, location, assets) {
    this.name = name; // Public property
    this.location = location; // Public property

    // Private values for security
    this.#bankCode = "BK" + Math.floor(Math.random() * 100000);
    this.#assets = assets;

    Bank.#totalBanks++; // Update private static counter
  }

  // --------------------------------------------------------------------
  // INSTANCE METHOD-A normal function inside a class. Belongs to each object created from this class. Used for actions related to THAT object.
  getInfo() {
    return `${this.name}, Place:-${this.location}`;
  }

  // --------------------------------------------------------------------
  // GETTERS (read-only accessors)-To safely EXPOSE privat Prevents accidental modi Allows formatting or extra logic when returning values.
  get code() {
    return this.#bankCode;
  }

  get assets() {
    return this.#assets;
  }
  // --------------------------------------------------------------------
  // SETTER (write access with validation)-To control *how* data is Prevent invalid or harmful values from being assigned.
  set assets(value) {
    if (typeof value !== "number" || value <= 0) {
      console.log("❌ Assets must be a positive number");
      return;
    }
    this.#assets = value;
  }
  // --------------------------------------------------------------------
  // STATIC METHOD-Belongs to the class, not Good for utilities, counters, and Called using Bank.methodName()
  static getTotalBanks() {
    return Bank.#totalBanks;
  }
  // --------------------------------------------------------------------
  // STATIC FACTORY METHOD-A clean way to create preconfigured objects.Common pattern for “default settings” or “professional templates”.
  static createDefaultBank() {
    return new Bank("Central Bank", "Capital City", 500000000);
  }
}

// =======================TESTING THE BANK CLASS============================
// const bank = new Bank("State Bank of India", "Mexico", 50000000000);

// console.log(Bank.bankingSystem); // Accessing static property directly from class
// // console.log(Bank.#totalBanks) // You cannot access a private static property (#totalBanks) from outside the class — that is exactly the purpose of # (hard privacy).
// console.log(Bank.getTotalBanks()); // But you CAN access it indirectly through a public static method provided inside the class:
// console.log(bank.name);
// console.log(bank.location);
// console.log(bank.assets);
// console.log(bank.getInfo());
// console.log(bank.code);
// console.log(bank.assets);
// bank.assets = 999999999; // Update value (setter)
// console.log(bank.assets);
// console.log(Bank.createDefaultBank()); //Static methods are always called on the class itself, not on an object.
// ========================================================================
// CLASS 2: EMPLOYEE (CHILD CLASS)-Demonstrates inheritance and child-specific features.
// ========================================================================
class Employee extends Bank {
  // PRIVATE FIELDS
  #salary;
  #empId;

  // --------------------------------------------------------------------
  // PROTECTED (by convention)-JS does NOT have real protected fields. Using "_" tells developers: "Don't access this from outside." Child classes can access it.
  _department = "General";
  // --------------------------------------------------------------------
  // CONSTRUCTOR (with inheritance)
  // - super() calls the parent constructor first.
  // - Then we initialize the child-specific properties.
  // --------------------------------------------------------------------
  constructor(bankName, location, assets, empName, salary) {
    super(bankName, location, assets); // Parent constructor
    this.empName = empName;
    this.#salary = salary;
    this.#empId = "EMP" + Math.floor(Math.random() * 100000);
  }
  // --------------------------------------------------------------------
  // METHOD OVERRIDING-To change or extend the behavior of a paren Child method replaces parent method with more super.getInfo() lets us REUSE parent logic.
  // --------------------------------------------------------------------
  getInfo() {
    return `${super.getInfo()} | Employee: ${this.empName}`;
  }
  // --------------------------------------------------------------------
  // GETTERS for private fields
  get employeeId() {
    return this.#empId;
  }

  get salary() {
    return this.#salary;
  }
  // --------------------------------------------------------------------
  // SETTER for salary (controlled update)
  set salary(amount) {
    if (amount < 15000 || amount > 2000000) {
      console.log("❌ Salary must be between 15k and 20L");
      return;
    }
    this.#salary = amount;
  }
  // --------------------------------------------------------------------
  // INSTANCE METHOD
  getDetails() {
    return `${this.empName} [${this.employeeId}] | Dept: ${this._department}`;
  }
}

// ========================================================================
// TESTING THE CLASSES
// ========================================================================

// const emp = new Employee(
//   "State Bank of India",
//   "Mumbai",
//   50000000000,
//   "Rajesh",
//   85000
// );

// console.log(emp.getInfo());          // Overridden method
// console.log(emp.getDetails());       // Employee method

// console.log("Bank Code:", emp.code); // Getter
// console.log("Salary:", emp.salary);

// emp.salary = 120000;                 // Setter validation
// console.log("Updated Salary:", emp.salary);

// console.log("Total Banks:", Bank.getTotalBanks());
