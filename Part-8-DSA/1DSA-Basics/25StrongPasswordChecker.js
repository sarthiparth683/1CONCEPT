const text = " Hello   Middle   World ";
const noSpaces = text.replace(/ /g, "");
console.log(noSpaces);
// --------------------
// string.includes(searchString, position)
const text2 = "Hello World";
console.log(text2.includes("H"));
console.log(text2.includes("H"), 0);
console.log(text2.includes("H"), 1);
console.log(text2.includes("h"), 2);
console.log(text2.includes("World"));
// ===========================================
function isStrongPassword(passwordString) {
  passwordString = passwordString.trim();
  if (passwordString.length < 8) {
    return false;
  }

  const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*";

  let lowerCaseCharacterExists = false;
  let upperCaseCharacterExists = false;
  let numberExists = false;
  let specialCharExists = false;

  for (let char of passwordString) {
    if (lowerCaseCharacters.includes(char)) {
      lowerCaseCharacterExists = true;
    } else if (upperCaseCharacters.includes(char)) {
      upperCaseCharacterExists = true;
    } else if (numbers.includes(char)) {
      numberExists = true;
    } else if (specialChars.includes(char)) {
      specialCharExists = true;
    }
  }

  if (
    lowerCaseCharacterExists &&
    upperCaseCharacterExists &&
    numberExists &&
    specialCharExists
  ) {
    return true;
  }

  return false;
}

console.log(isStrongPassword("Ashish1!"));
console.log(isStrongPassword("Ash1!"));
console.log(isStrongPassword("Ashis1!"));
console.log(isStrongPassword("ashish1!"));
console.log(isStrongPassword("ashisha!"));
console.log(isStrongPassword("ashish1a"));
// =========================================================================