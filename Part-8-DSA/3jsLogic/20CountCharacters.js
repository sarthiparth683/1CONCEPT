function countCharacters(inputString) {
  const result = {};
  inputString = inputString.toLowerCase();
  console.log("result before", result);
  for (let i = 0; i < inputString.length; i++) {
    if (!result[inputString[i]]) {
      result[inputString[i]] = 0;
    }

    result[inputString[i]] = result[inputString[i]] + 1;
  }

  return result;
}

// console.log("Ashish Saluja 1", countCharacters("Ashish Saluja 1"));
// =============================================================================
function countCharacters2(inputString) {
  inputString = inputString.toLowerCase();
  const splittedString = inputString.split("");
  const result = splittedString.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char] = acc[char] + 1;
    return acc;
  }, {});

  return result;
}

// console.log("Ashish Saluja 1", countCharacters2("Ashish Saluja 1"));
// ================================================================================
function count(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]] = obj[str[i]] + 1;
  }
  console.log(obj);
}

// count("Parth Sarthi");
// count("aljdowndnwnnowejinancoaweiajjlskejio");
// ================================================================================
function count2(str) {
  let arr = str.split("");
  let res = arr.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char] += 1;
    return acc;
  }, {});
  console.log(res);
}

// count2("Parth Sarthi");
// count2("akljalkjalajowdnlakjowjiowlsjlmcno");
// ===================================================================================