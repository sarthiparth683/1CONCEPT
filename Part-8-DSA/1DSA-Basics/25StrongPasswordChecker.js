const text = " Hello   Middle   World ";
console.log(text.replace(/ /g, "-"));
// -----------------------------------------------
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

  return (
    lowerCaseCharacterExists &&
    upperCaseCharacterExists &&
    numberExists &&
    specialCharExists
  );
}

console.log(isStrongPassword("Ashish1!"));
console.log(isStrongPassword("Ash1!"));
console.log(isStrongPassword("Ashis1!"));
console.log(isStrongPassword("ashish1!"));
console.log(isStrongPassword("ashisha!"));
console.log(isStrongPassword("ashish1a"));
// =========================================================================
function isStrongPassword2(password) {
  if (password.length < 8) return false;

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  return hasLower && hasUpper && hasNumber && hasSpecial;
}

console.log(isStrongPassword2("Ashish1!"));
console.log(isStrongPassword2("Ash1!"));
console.log(isStrongPassword2("Ashis1!"));
console.log(isStrongPassword2("ashish1!"));
console.log(isStrongPassword2("ashisha!"));
console.log(isStrongPassword2("ashish1a"));
// ================================================================================
function strong(str) {
  if (str.length < 8) {
    return false;
  }

  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = "1234567890";
  let specialChar = "!@#$%^&*";

  let lower = false;
  let upper = false;
  let number = false;
  let special = false;

  for (let char of str) {
    if (lowerCase.includes(char)) {
      lower = true;
    } else if (upperCase.includes(char)) {
      upper = true;
    } else if (num.includes(char)) {
      number = true;
    } else if (specialChar.includes(char)) {
      special = true;
    }
  }

  return lower && upper && number && special;
}

console.log(strong("Ashish1!"));
console.log(strong("Ash1!"));
console.log(strong("Ashis1!"));
// ====================================================