// Activity 1: Write a function in JavaScript that uses optional chaining to safely access the age property of a given person object. If the age property is present, return its value; otherwise, return a default value of 0.
// Solution:
function getPersonAge(person) {
  return person?.age || 0;
}

// Explanation: The function uses optional chaining (?.) to safely access the age property of the person object. If the age property exists, its value is returned; otherwise, the default value of 0 is returned.