// Activity 3: Implement a function that destructures an object and extracts the nested property education.degree.name.
// Solution:
function getDegreeName(user) {
  const {
    education: {
      degree: { name },
    },
  } = user;
  return name;
}