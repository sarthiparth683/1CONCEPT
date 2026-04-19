const parantheses = {
  "{": "}",
  "(": ")",
  "[": "]",
};

function isBalanced(inputString) {
  const parantheseArray = [];

  for (let char of inputString) {
    if (parantheses[char]) {
      // if key is present then push to arr
      parantheseArray.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpeningParanthesis = parantheseArray.pop();
      if (parantheses[lastOpeningParanthesis] !== char) {
        // checking opening = closing or not
        return false;
      }
    }
  }

  return parantheseArray.length === 0;
}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("{[]"));
// =========================================================================
let obj = {
  "{": "}",
  "(": ")",
  "[": "]",
};

function parentheses(str) {
  let arr = []
  for(let char of str){
    if(obj[char]){
      arr.push(char)
    }else if(char === ")" || char === "}" || char === "]" ){
      let lastEl = arr.pop()
      if(obj[lastEl] !== char){
       return false;
      }
    }
  }

  console.log(arr)
  return arr.length === 0
}

console.log(parentheses("{[()]}"));
console.log(parentheses("{[(])}"));
console.log(parentheses("{[]"));
 