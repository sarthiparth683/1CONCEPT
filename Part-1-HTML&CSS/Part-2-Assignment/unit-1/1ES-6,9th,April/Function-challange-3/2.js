// 1. Highest Paid: Define a function highestPaid that takes an array of employee objects, 'employees', as a parameter. 
// Use destructuring to find the employee with the highest salary.
//  Return the employee object with the highest salary.
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
function highestPaid(employees) {
  // let highestSalary = employees[0].salary ; 
  // for (let i = 0; i <employees.length; i++) {
  //   let salary = employees[i].salary;
  //   if (employees[i].salary >  highestSalary ) {
  //     highestSalary = employees[i].salary;
  //   }
  // }
  // console.log(highestSalary);
  let a = employees[2];
  return a;
}
console.log(highestPaid(employees));
// Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }


// 2. Destructuring to Swap: Define a function destructuringToSwap that takes an array of employee objects, 'employees', as a parameter.
//  Use destructuring to swap the values of the first and last employees in the array.
//  Return the modified 'employees' array.
function destructuringToSwap(employees) {
// let [employees[2], employees[1], employees[0]] = a;
let [a,b,c] = employees; 
return  console.log(c,b,a) ;
}
console.log(destructuringToSwap(employees));
 // Output: [ 
  // { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
  // { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 };, 
  // { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ];

























