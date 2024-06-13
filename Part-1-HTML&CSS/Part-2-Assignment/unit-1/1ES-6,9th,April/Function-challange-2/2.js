// 1. Employee Information: Define a function employeeInformation that takes an array of employee objects, 'employees', as a parameter. Extract the name and department of the second employee in the array and assign them to variables 'secondEmployeeName' and 'secondEmployeeDepartment'. Return an object with 'secondEmployeeName' and 'secondEmployeeDepartment'.
//Example Invocation:
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
function employeeInformation(employees) {
  let obj = {};
  const secondEmployeeName = employees[1].name;
  const secondEmployeeDepartment = employees[1].department;
  obj = {
    secondEmployeeName,
    secondEmployeeDepartment,
  }
  return obj;
}
console.log(employeeInformation(employees));
// Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }




// 2. Average Salary: Define a function averageSalary that takes an array of employee objects, 'employees', as a parameter. Calculate the average salary of all employees using destructuring and a for-of-loop. Return the average salary.
function averageSalary(employees) {
  let total = employees.length;
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum = sum + employees[i].salary;
  }
  let avg = sum / total;
  // return console.log(avg);
  return avg;
};
console.log(averageSalary(employees));
// Output: 60000



// 3. Third Employee Info: Define a function thirdEmployeeInfo that takes an array of employee objects, 'employees', as a parameter. Extract the name, age, and salary of the third employee and assign them to variables 'thirdEmployeeName', 'thirdEmployeeAge', and 'thirdEmployeeSalary'.
//  Calculate a bonus of 10% on the salary.
//  Return a string in the format "Employee: , Age: , Salary: , Bonus: ".
//Example Invocation:

function thirdEmployeeInfo(employees) {
  let thirdEmployeeName = employees[2].name;
  let thirdEmployeeAge = employees[2].age;
  let thirdEmployeeSalary = employees[2].salary;
  let bonous = 7000;
  return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge},  Salary: ${thirdEmployeeSalary}, Bonus: ${bonous}`;
}
console.log(thirdEmployeeInfo(employees));
// Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"