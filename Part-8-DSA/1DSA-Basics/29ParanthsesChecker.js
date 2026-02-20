const parantheses = {
  "{": "}",
  "(": ")",
  "[": "]",
};

console.log(parantheses["{"]);
console.log(parantheses["("]);
console.log(parantheses["["]);

function isBalanced(inputString) {
  //console.log(inputString);
  const parantheseArray = []; // contains front value
  for (let char of inputString) {
    if (parantheses[char]) {
      parantheseArray.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpeningParanthesis = parantheseArray.pop(); // front
      if (parantheses[lastOpeningParanthesis] !== char) { // front = back equlas in obj or not
        return false;
      }
    }
  }
  console.log('parantheseArray', parantheseArray);
  return parantheseArray.length === 0;
}

console.log("{[()]}", isBalanced("{[()]}"));

// console.log("{[(])}", isBalanced("{[(])}"));

// console.log("{[]", isBalanced("{[]"));
