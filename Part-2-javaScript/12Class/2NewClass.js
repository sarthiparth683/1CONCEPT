
// ================================================================
// CLASS 1: BANK (BASE/PARENT CLASS)
// Demonstrates: Constructor, Instance Methods, Static Methods, 
//               Static Properties, Static Block, Private Fields, 
//               Getters & Setters
// ================================================================

class Bank {
  // STATIC PROPERTIES - Shared across ALL Bank instances (belong to class, not objects)
  static #totalBanks = 0; // PRIVATE static property (# makes it private)
  static bankingSystem = "Reserve Banking System"; // PUBLIC static property

  // PRIVATE FIELDS - Only accessible inside this class (true encapsulation)
  // Private fields MUST be declared at the top before constructor
  #bankCode; // Unique bank identifier (private for security)
  #totalAssets; // Financial data (private for confidentiality)

  // STATIC BLOCK - Runs ONCE when class is first loaded (not per instance)
  // Use case: One-time initialization, logging, setup
  static {
    console.log("╔════════════════════════════════════╗");
    console.log("║  Banking System Initialized ✓      ║");
    console.log("╚════════════════════════════════════╝\n");
  }

  // CONSTRUCTOR - Special method that automatically runs when creating new object
  constructor(bankName, location, assets) {
    this.bankName = bankName; // PUBLIC property (accessible anywhere)
    this.location = location; // PUBLIC property
    this.#bankCode = `BK${Math.floor(Math.random() * 100000)}`; // PRIVATE property
    this.#totalAssets = assets; // PRIVATE property
    Bank.#totalBanks++; // Increment static counter
  }

  // INSTANCE METHOD - Regular function inside class
  // "this" refers to the specific object calling the method
  getBankInfo() {
    return `${this.bankName} - ${this.location}`;
  }

  // INSTANCE METHOD 
  displayInfo() {
    return `🏦 ${this.bankName} | Code: ${this.#bankCode} | Location: ${this.location}`;
  }

  // GETTER - Makes method accessible like a property (NO parentheses needed)
  // Called like: bankObj.bankCode (not bankObj.bankCode())
  // Use case: Read-only access to private fields with formatting
  get bankCode() {
    return this.#bankCode;
  }

  // GETTER - Access private assets with formatting
  get assets() {
    return `$${this.#totalAssets.toLocaleString()}`;
  }

  // SETTER - Controls HOW a property can be modified (with validation)
  // Called like: bankObj.assets = 5000000
  // Use case: Validate data before allowing modification
  set assets(value) {
    if (typeof value !== "number" || value <= 0) {
      console.log("❌ Assets must be a positive number");
      return;
    }
    this.#totalAssets = value;
    console.log(`✅ Assets updated to $${value.toLocaleString()}`);
  }

  // STATIC METHOD - Belongs to CLASS itself, NOT to individual objects
  // Called like: Bank.getTotalBanks() (NOT bankObj.getTotalBanks())
  // Use case: Utility functions, counters, factory patterns
  static getTotalBanks() {
    return `Total banks registered: ${Bank.#totalBanks}`;
  }

  // STATIC FACTORY METHOD - Alternative way to create objects
  // Use case: Create objects with predefined configurations
  static createDefaultBank() {
    return new Bank("Central Bank", "Capital City", 10000000);
  }

  // STATIC METHOD - Another utility example
  static getBankingSystemInfo() {
    return `System: ${Bank.bankingSystem}`;
  }
}

// ════════════════ TESTING BANK CLASS ════════════════
const bank1 = new Bank("State Bank of India", "Mumbai", 5000000000);
const bank2 = new Bank("HDFC Bank", "Delhi", 3000000000);

// console.log(bank1.getBankInfo()); // Instance method
// console.log(bank1.displayInfo()); // Instance method
// console.log(`Bank Code: ${bank1.bankCode}`); // Getter (no parentheses!)
// console.log(`Assets: ${bank1.assets}`); // Getter

// bank1.assets = 6000000000; // Setter (validates and updates)
// console.log(`Updated Assets: ${bank1.assets}`);
// bank1.assets = -1000; // Setter validation will fail

// console.log(Bank.getTotalBanks()); // Static method (called on CLASS)
// console.log(Bank.getBankingSystemInfo()); // Static method
// console.log(`Static Property: ${Bank.bankingSystem}\n`);

// ❌ ERRORS (commented out):
// console.log(bank1.#bankCode); // Error: Private field not accessible
// console.log(bank1.getTotalBanks()); // Error: Static method can't be called on instance

// ================================================================
// CLASS 2: EMPLOYEE (CHILD CLASS - INHERITS FROM BANK)
// Demonstrates: Inheritance (extends), super(), Method Overriding,
//               Protected Convention (_prefix), Complex Getters/Setters
// ================================================================

class Employee extends Bank {
  // PROTECTED CONVENTION - Properties with _ prefix
  // Not enforced by JavaScript, but signals "internal use only"
  // Convention: Subclasses can access, external code should not
  _department;
  _employeeStatus; // protected status field

  // PRIVATE FIELDS specific to Employee
  #salary; // Sensitive financial data
  #employeeId; // Unique identifier
  #performanceRating; // Private rating

  // CONSTRUCTOR with Inheritance
  constructor(bankName, location, assets, empName, department, salary) {
    super(bankName, location, assets);
    this.empName = empName; // PUBLIC property
    this._department = department; // PROTECTED by convention
    this._employeeStatus = "Active"; // PROTECTED by convention
    this.#salary = salary; // PRIVATE property
    this.#employeeId = `EMP${Math.floor(Math.random() * 100000)}`; // PRIVATE
    this.#performanceRating = 0; // PRIVATE (default value)
    this.joinDate = new Date().toLocaleDateString(); // PUBLIC property
  }

  // METHOD OVERRIDING - Redefining parent's method
  getBankInfo() {
    const parentInfo = super.getBankInfo();
    return `${parentInfo} | Employee: ${this.empName}`;
  }

  // GETTER for private employee ID
  get employeeId() {
    return this.#employeeId;
  }

  get salary() {
    return `$${this.#salary.toLocaleString()}/year`;
  }

  // SETTER for salary with VALIDATION
  set salary(newSalary) {
    if (typeof newSalary !== "number" || newSalary < 30000 || newSalary > 1000000) {
      console.log("❌ Salary must be between $30,000 and $1,000,000");
      return;
    }
    this.#salary = newSalary;
    console.log(`✅ Salary updated to $${newSalary.toLocaleString()}`);
  }

  // GETTER for protected department (accessing _prefix property)
  get department() {
    return this._department;
  }

  // SETTER for department with validation
  set department(dept) {
    const validDepts = ["IT", "HR", "Finance", "Operations", "Sales", "Marketing"];
    if (!validDepts.includes(dept)) {
      console.log(`❌ Invalid department. Valid options: ${validDepts.join(", ")}`);
      return;
    }
    this._department = dept;
    console.log(`✅ Department changed to ${dept}`);
  }

  // GETTER for protected status
  get status() {
    return this._employeeStatus;
  }

  // SETTER for status
  set status(newStatus) {
    const validStatuses = ["Active", "On Leave", "Retired"];
    if (!validStatuses.includes(newStatus)) {
      console.log(`❌ Invalid status. Valid options: ${validStatuses.join(", ")}`);
      return;
    }
    this._employeeStatus = newStatus;
    console.log(`✅ Status changed to ${newStatus}`);
  }

  // GETTER and SETTER for performance rating
  get performanceRating() {
    return this.#performanceRating > 0 ? `${this.#performanceRating}/10` : "Not rated yet";
  }

  set performanceRating(rating) {
    if (typeof rating !== "number" || rating < 0 || rating > 10) {
      console.log("❌ Rating must be between 0 and 10");
      return;
    }
    this.#performanceRating = rating;
    console.log(`✅ Performance rating set to ${rating}/10`);
  }

  // INSTANCE METHOD - Employee-specific functionality
  getEmployeeDetails() {
    return `👤 ${this.empName} [${this.#employeeId}] | ${this._department} | Joined: ${this.joinDate} | Status: ${this._employeeStatus}`;
  }

  // INSTANCE METHOD - Work activity
  performWork() {
    return `${this.empName} is working in ${this._department} department`;
  }

  // INSTANCE METHOD - Display complete profile
  displayProfile() {
    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EMPLOYEE PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${this.empName}
Employee ID: ${this.#employeeId}
Department: ${this._department}
Bank: ${this.bankName}
Location: ${this.location}
Salary: ${this.salary}
Status: ${this._employeeStatus}
Join Date: ${this.joinDate}
Performance: ${this.performanceRating}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
  }
}

// ════════════════ TESTING EMPLOYEE CLASS ════════════════

const emp1 = new Employee(
  "State Bank of India",
  "Mumbai",
  5000000000,
  "Rajesh Kumar",
  "IT",
  85000
);

// console.log(emp1.getBankInfo()); // OVERRIDDEN method
// console.log(emp1.getEmployeeDetails());
// console.log(`Employee ID: ${emp1.employeeId}`); // GETTER
// console.log(`Salary: ${emp1.salary}`); // GETTER

// emp1.salary = 95000; // SETTER with validation
// console.log(`Updated Salary: ${emp1.salary}`);

// emp1.department = "Finance"; // SETTER
// console.log(`Department: ${emp1.department}`); // GETTER

// emp1.status = "On Leave"; // SETTER for protected property
// emp1.performanceRating = 8.5; // SETTER for private field
// console.log(`Performance: ${emp1.performanceRating}`); // GETTER

// console.log(emp1.performWork());
// console.log(emp1.displayProfile());

// // Employee INHERITS Bank's static methods
// console.log(Bank.getTotalBanks());

// ================================================================
// CLASS 3: MANAGER (GRANDCHILD - INHERITS FROM EMPLOYEE)
// Demonstrates: Multi-level Inheritance, Private Arrays, 
//               Complex Getters, Composition, Method Chaining
// ================================================================

class Manager extends Employee {
  // PRIVATE FIELDS specific to Manager
  #teamSize;
  #bonus;
  #projects; // Private array
  #meetingsScheduled;

  // STATIC PROPERTY specific to Manager
  static #totalManagers = 0;
  static managerLevels = ["Junior", "Mid-Level", "Senior", "Director"];

  // CONSTRUCTOR with Multi-level Inheritance
  constructor(
    bankName,
    location,
    assets,
    empName,
    department,
    salary,
    teamSize,
    bonus = 0
  ) {
    // SUPER() calls Employee constructor
    super(bankName, location, assets, empName, department, salary);
    // Initialize Manager-specific properties
    this.#teamSize = teamSize;
    this.#bonus = bonus;
    this.#projects = []; // Initialize empty array
    this.#meetingsScheduled = 0;
    this.managerLevel = "Mid-Level"; // PUBLIC property with default
    Manager.#totalManagers++; // Increment static counter
  }

  // COMPLEX GETTER - Calculates value from multiple sources
  // Accesses parent's private field through parent's getter
  get totalCompensation() {
    // Extract numeric value from parent's formatted salary
    const baseSalary = parseInt(this.salary.replace(/[$,/year]/g, ""));
    const total = baseSalary + this.#bonus;
    return `$${total.toLocaleString()}/year (Base: ${this.salary} + Bonus: $${this.#bonus.toLocaleString()})`;
  }

  // GETTER for team size
  get teamSize() {
    return this.#teamSize;
  }

  // SETTER for team size with validation
  set teamSize(size) {
    if (typeof size !== "number" || size <= 0 || size > 50) {
      console.log("❌ Team size must be between 1 and 50");
      return;
    }
    this.#teamSize = size;
    console.log(`✅ Team size updated to ${size}`);
  }

  // GETTER for bonus
  get bonus() {
    return `$${this.#bonus.toLocaleString()}`;
  }

  // SETTER for bonus with validation
  set bonus(amount) {
    if (typeof amount !== "number" || amount < 0) {
      console.log("❌ Bonus cannot be negative");
      return;
    }
    this.#bonus = amount;
    console.log(`✅ Bonus set to $${amount.toLocaleString()}`);
  }

  // GETTER for project count
  get projectCount() {
    return this.#projects.length;
  }

  // GETTER for projects list (returns COPY, not original - security)
  get projects() {
    return this.#projects.map((p) => p.name); // Return only names
  }

  // GETTER for detailed projects
  get projectDetails() {
    return [...this.#projects]; // Spread operator creates copy
  }

  // METHOD - Add project to private array
  addProject(projectName, deadline) {
    if (!projectName || projectName.trim() === "") {
      console.log("❌ Project name cannot be empty");
      return this; // Return this for METHOD CHAINING
    }

    this.#projects.push({
      name: projectName,
      deadline: deadline || "TBD",
      addedOn: new Date().toLocaleDateString(),
      status: "In Progress",
    });
    console.log(`✅ Project "${projectName}" added`);
    return this; // Return this for METHOD CHAINING
  }

  // METHOD - Remove project
  removeProject(projectName) {
    const initialLength = this.#projects.length;
    this.#projects = this.#projects.filter((p) => p.name !== projectName);

    if (this.#projects.length < initialLength) {
      console.log(`✅ Project "${projectName}" removed`);
    } else {
      console.log(`❌ Project "${projectName}" not found`);
    }
    return this; // Return this for METHOD CHAINING
  }

  // METHOD OVERRIDING - Customize inherited method twice
  // Manager → overrides Employee → which overrode Bank
  getEmployeeDetails() {
    const baseDetails = super.getEmployeeDetails(); // Call parent's version
    return `${baseDetails} | 👔 Manager | Team: ${this.#teamSize} | Level: ${this.managerLevel}`;
  }

  // COMPOSITION PATTERN - Adding behaviors through methods
  // Instead of deep inheritance, compose functionality
  assignTask(employeeName, taskName) {
    return `✓ ${this.empName} assigned "${taskName}" to ${employeeName}`;
  }

  conductMeeting(topic) {
    this.#meetingsScheduled++;
    return `📋 ${this.empName} is conducting meeting on "${topic}" with ${this.#teamSize} team members (Meeting #${this.#meetingsScheduled})`;
  }

  approveLeave(employeeName, days) {
    return `✓ ${this.empName} approved ${days} day(s) leave for ${employeeName}`;
  }

  reviewPerformance(employeeName, rating) {
    if (rating < 1 || rating > 10) {
      return "❌ Rating must be between 1 and 10";
    }
    return `✓ ${this.empName} rated ${employeeName}'s performance: ${rating}/10`;
  }

  // STATIC METHOD - Class-level function
  static getTotalManagers() {
    return `Total managers in system: ${Manager.#totalManagers}`;
  }

  // STATIC METHOD - Utility function
  static getManagerLevels() {
    return `Available levels: ${Manager.managerLevels.join(", ")}`;
  }

  // VALIDATION METHOD - Abstract pattern simulation
  validateManagerStatus() {
    const errors = [];

    if (this.#projects.length < 1) {
      errors.push("Must have at least 1 active project");
    }
    if (this.#teamSize < 3) {
      errors.push("Team size should be at least 3 members");
    }
    if (this._employeeStatus !== "Active") {
      errors.push("Manager status must be Active");
    }

    if (errors.length > 0) {
      throw new Error(`Manager validation failed:\n- ${errors.join("\n- ")}`);
    }

    return `✅ Manager ${this.empName} meets all requirements`;
  }

  // COMPLEX METHOD - Uses multiple private fields, getters, and inheritance
  generateReport() {
    let report = `
╔════════════════════════════════════════════════════════════╗
║              MANAGER PERFORMANCE REPORT                    ║
╠════════════════════════════════════════════════════════════╣
║ Personal Information                                       ║
╠════════════════════════════════════════════════════════════╣
  Name: ${this.empName}
  Employee ID: ${this.employeeId}
  Department: ${this.department}
  Manager Level: ${this.managerLevel}
  Status: ${this.status}
  Join Date: ${this.joinDate}
╠════════════════════════════════════════════════════════════╣
║ Compensation Details                                       ║
╠════════════════════════════════════════════════════════════╣
  Base Salary: ${this.salary}
  Bonus: ${this.bonus}
  Total Compensation: ${this.totalCompensation}
╠════════════════════════════════════════════════════════════╣
║ Team & Performance Metrics                                 ║
╠════════════════════════════════════════════════════════════╣
  Team Size: ${this.#teamSize} members
  Active Projects: ${this.#projects.length}
  Meetings Conducted: ${this.#meetingsScheduled}
  Performance Rating: ${this.performanceRating}
╠════════════════════════════════════════════════════════════╣
║ Bank Information                                           ║
╠════════════════════════════════════════════════════════════╣
  Bank: ${this.bankName}
  Location: ${this.location}
  Bank Code: ${this.bankCode}
╠════════════════════════════════════════════════════════════╣
║ Active Projects                                            ║
╠════════════════════════════════════════════════════════════╣`;

    if (this.#projects.length > 0) {
      this.#projects.forEach((project, index) => {
        report += `
  ${index + 1}. ${project.name}
     Deadline: ${project.deadline} | Status: ${project.status}`;
      });
    } else {
      report += "\n  No active projects";
    }

    return report + "\n╚════════════════════════════════════════════════════════════╝";
  }
}

// ════════════════ TESTING MANAGER CLASS ════════════════

const mgr1 = new Manager(
  "State Bank of India",
  "Mumbai",
  5000000000,
  "Priya Sharma",
  "Operations",
  150000,
  18,
  35000
);

// console.log(mgr1.getBankInfo()); // Inherited from Bank, overridden by Employee, overridden by Manager
// console.log(mgr1.getEmployeeDetails()); // Overridden in Manager

// // Using GETTERS (no parentheses)
// console.log(`Total Compensation: ${mgr1.totalCompensation}`);
// console.log(`Team Size: ${mgr1.teamSize}`);
// console.log(`Bonus: ${mgr1.bonus}`);

// // Using SETTERS with validation
// mgr1.teamSize = 22;
// mgr1.bonus = 40000;
// mgr1.performanceRating = 9;

// // METHOD CHAINING - Adding multiple projects
// mgr1
//   .addProject("Digital Banking Platform", "Dec 2025")
//   .addProject("Mobile App Redesign", "Jan 2026")
//   .addProject("AI Customer Service", "Mar 2026");

// console.log(`\nProjects: ${mgr1.projects.join(", ")}`);
// console.log(`Project Count: ${mgr1.projectCount}`);

// // Manager-specific COMPOSITION methods
// console.log("\n" + mgr1.assignTask("Amit", "Database Optimization"));
// console.log(mgr1.conductMeeting("Q4 Planning"));
// console.log(mgr1.approveLeave("Rohit", 5));
// console.log(mgr1.reviewPerformance("Sneha", 8));

// // Validation
// try {
//   console.log("\n" + mgr1.validateManagerStatus());
// } catch (error) {
//   console.log(error.message);
// }

// // Generate comprehensive report
// console.log(mgr1.generateReport());

// // STATIC METHODS
// console.log("\n" + Manager.getTotalManagers());
// console.log(Manager.getManagerLevels());
// console.log(Bank.getTotalBanks()); // Still accessible from grandparent!

