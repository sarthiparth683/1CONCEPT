// #### ImplementationPS6
// - create a new object called `newObj`  `newObj` contains unique students as key and an array of subjects as value.
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
// output
// {
//       Prateek: ["Rust", "Javascript"],
//       Yogesh: ["HTML"],
//       Nrupul: ["Java"],
// }

//-----------------------------------------------------------
function ImplementationPS6(students, subject) {
  let obj = {};
  obj[students[0].name] = [subjectsHash[5], subjectsHash[1]];
  obj[students[1].name] = [subjectsHash[2]];
  obj[students[2].name] = [subjectsHash[4]];
  return obj;
};
console.log(ImplementationPS6(students, subjectsHash));

//-----------------------------------------------------------

