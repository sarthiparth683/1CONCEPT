// Activity 2: Create a function in JavaScript that takes an array of objects representing students. Each student object has a name property and an optional grades property, which is an array of numbers. The function should calculate and return the average grade for each student. If a student doesn't have any grades, their average should be 0.
//Solution:
function calculateAverageGrades(students) {
  return students.map((student) => {
    const grades = student?.grades || [];
    const averageGrade =
      grades.length > 0 ? grades.reduce((a, b) => a + b) / grades.length : 0;
    return { name: student.name, averageGrade };
  });
};

// Explanation: The function takes an array of students objects and uses optional chaining to safely access the grades property of each student. If the grades property is missing, an empty array is used. The function then calculates the average grade for each student, considering a default value of 0 if they have no grades.