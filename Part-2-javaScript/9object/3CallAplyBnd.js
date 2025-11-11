// ============================================
// Call, Apply, Bind in js
// ============================================
const employee = {
  name: "Sarah Johnson",
  role: "Senior Developer",
  department: "Engineering",
  salary: 95000,
  yearsOfExperience: 5,
  location: "New York"
};

// One function that displays detailed employee information
function displayEmployeeProfile(bonus, projectName) {
  console.log("===== EMPLOYEE PROFILE =====");
  console.log(`Name: ${this.name}`);
  console.log(`Role: ${this.role} | Department: ${this.department}`);
  console.log(`Experience: ${this.yearsOfExperience} years | Location: ${this.location}`);
  console.log(`Annual Salary: $${this.salary} | Bonus: $${bonus}`);
  console.log(`Total Compensation: $${this.salary + bonus}`);
  console.log(`Current Project: ${projectName}`);
  console.log("============================\n");
}
//=======================================================
// 1. USING CALL() - Execute immediately, args one by one
// let empl = displayEmployeeProfile.call(employee, 10000, "Mobile App Redesign");
// ============================================
// 2. USING APPLY() - Execute immediately, args as array
// displayEmployeeProfile.apply(employee, [15000, "Cloud Migration Project"]);
// ============================================
// 3. USING BIND() - Create reusable function
// Create a bound function that can be called later
// const showEmployeeProfile = displayEmployeeProfile.bind(employee, 12000, "AI Integration");
// showEmployeeProfile();

