// #### ImplementationPS6
// - input
let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
  ];
  // - create a new object called `newObj` using the `students` array &  
  //   the `subjectsHash` object.
  // - `newObj` contains unique students as key and an array of subjects as value.
  function ImplementationPS6(students, subjectsHash) {
  let newObj = {};
  
  students.map((e, i) => {
    newObj.e.name = "sas"
    // console.log(e.name); 
  });
  
  console.log(newObj)
  }
  
  console.log(ImplementationPS6(students, subjectsHash));
  
  // output
  // {
  //       Prateek: ["Rust", "Javascript"],
  //       Yogesh: ["HTML"],
  //       Nrupul: ["Java"],
  // }
  
  
  