// 6. Destructured Object Inside Function Params
// Explanation: You can destructure objects directly in function parameters.  

const displayPerson = ({ name, age }) => {
  console.log(name, age)
}

let person = {
  name: "batman",
  age: 26,
}
displayPerson(person);
