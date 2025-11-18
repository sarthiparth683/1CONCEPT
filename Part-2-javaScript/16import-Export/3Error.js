// Error Handling

try {
  // ... normal code
} catch (err) {
  //err is error object
  // ... handling error
}
//=================================================================
try {
  let result = 10;
  console.log(` ${result}, No Error`);
} catch (err) {
  console.error("An error occurred:");
  console.error(err.name); // e.g., ReferenceError
  console.error(err.message); // e.g., nonExistentVariable is not defined
  console.log(err);
}
console.log("The script continues to run after handling the error.");

// ===============================================================
try {
  console.log("Inside try block: Code runs successfully.");
} catch (err) {
  console.error("Inside catch block: An error occurred.");
} finally {
  console.log(
    "No matter what happens in the try or catch blocks, the finally block will always execute, making it ideal for important cleanup actions in your code."
  );
}
