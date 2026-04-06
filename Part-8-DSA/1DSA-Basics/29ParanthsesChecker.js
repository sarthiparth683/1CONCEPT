const parantheses = {
  "{": "}",
  "(": ")",
  "[": "]",
};

function isBalanced(inputString) {
  const parantheseArray = [];
  
  for (let char of inputString) {
    // console.log(parantheses[char])
    if (parantheses[char]) { // value is present
      parantheseArray.push(char); // key is pushed
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpeningParanthesis = parantheseArray.pop(); // front
      if (parantheses[lastOpeningParanthesis] !== char) {
        // front = back equlas in obj or not
        return false;
      }
    }
  }

  console.log("parantheseArray", parantheseArray);
  return parantheseArray.length === 0;
}

console.log(isBalanced("{[()]}"));
// console.log(isBalanced("{[(])}"));
// console.log(isBalanced("{[]"));
