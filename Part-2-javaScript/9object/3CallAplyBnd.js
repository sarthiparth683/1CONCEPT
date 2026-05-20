// ============================================
// Call, Apply, Bind in js
// ============================================
const employee1 = {
  name: "Sarah Johnson",
  role: "Senior Developer",
  department: "Engineering",
  salary: 95000,
  yearsOfExperience: 5,
  location: "New York",
};

const employee2 = {
  name: "Parth Sarthi",
  role: "MERN Developer",
  department: "Engineering",
  salary: 98000,
  yearsOfExperience: 8,
  location: "Hawai",
};

function displayEmployeeProfile(bonus, projectName) {
  console.log(`${this.name}`);
  console.log(`${this.role}`);
  console.log(`${this.department}`);
  console.log(`${this.salary}`);
  console.log(`${this.yearsOfExperience}`);
  console.log(`${this.location}`);
  console.log(`${this.salary + bonus}`);
  console.log(`${bonus}`);
  console.log(`${projectName}`);
}

//==================================================================================
// 1. USING CALL() - first object is passed , then pass the arguments you wnat

// displayEmployeeProfile.call(employee1, 10000, "Mobile App Redesign");
// displayEmployeeProfile.call(employee2, 10000, "Mobile App Redesign");
// =================================================================================
// 2. USING APPLY() - first object is passed , then arguments is passed inside Array

// displayEmployeeProfile.apply(employee1, [15000, "Cloud Migration Project"]);
// displayEmployeeProfile.apply(employee2, [15000, "Cloud Migration Project"]);
// =================================================================================
// 3. USING BIND() - same as call but kept in variable to call it later...

const showEmployeeProfile = displayEmployeeProfile.bind(employee1, 12000, "AI Integration");
// showEmployeeProfile();

const showEmployeeProfile2 = displayEmployeeProfile.bind(employee2, 12000, "AI Integration");
// showEmployeeProfile2()
// =================================================================================
