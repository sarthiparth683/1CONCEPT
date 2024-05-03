// 1.
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];



function employeeInformation(employees) {
  let obj = {};
  const secondEmployeeName = employees[1].name;
  const secondEmployeeDepartment = employees[1].department;
  obj = { secondEmployeeName, secondEmployeeDepartment, }
  return obj;
};
// console.log(employeeInformation(employees));
// Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
//-------------------------------------------------------------------------------------------


// 2. Return the average salary.
function averageSalary(employees) {
  let total = employees.length;
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum = sum + employees[i].salary;
  }
  let avg = sum / total;
  return avg;
};
// console.log(averageSalary(employees));
// Output: 60000
//-------------------------------------------------------------------------------------------


// 3.  Extract the name, age, and salary of the third employee and assign them to variables 'thirdEmployeeName', 'thirdEmployeeAge', and 'thirdEmployeeSalary'.
function thirdEmployeeInfo(employees) {
  let thirdEmployeeName = employees[2].name;
  let thirdEmployeeAge = employees[2].age;
  let thirdEmployeeSalary = employees[2].salary;
  let bonous = 7000;
  // return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge},  Salary: ${thirdEmployeeSalary}, Bonus: ${bonous}`;
  let obj = { thirdEmployeeName, thirdEmployeeAge, thirdEmployeeSalary, bonous};
  return obj;
};
console.log(thirdEmployeeInfo(employees));
// Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
//-------------------------------------------------------------------------------------------