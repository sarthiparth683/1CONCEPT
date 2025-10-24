// Data Structure 👇
const studentsDatabase = ["jordan", "erick", "john", "michel"];
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};
findStudent(studentsDatabase, "erick");
