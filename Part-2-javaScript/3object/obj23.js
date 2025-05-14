// 1.find the employee with the highest salary.
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 54123 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 65123 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 75123 }
  ];
  function highestPaid(employees) {
    let salary = [];
    for (let i = 0; i < employees.length; i++) {
      salary.push(employees[i].salary);
    }
   let max = Math.max(...salary)
   console.log("Max = ", max);
   let min = Math.min(...salary);
   console.log("Min = ", min);
  };
highestPaid(employees);
  // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
  //-------------------------------------------------------------------------------------------------------
  

  // 2.  Use destructuring to swap the values of the first and last employees in the array.
  function destructuringToSwap(employees) {
  let [a,b,c] = employees; 
  let newArr = [c,b,a];
  let a1 = console.log(newArr);
  return a1;
  }
  // destructuringToSwap(employees);
   // Output: [ 
    // { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
    // { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 };, 
    // { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ];
  //-----------------------------------------------------------------------------------------------------