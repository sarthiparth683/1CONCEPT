try {
  // run code
} catch (err) {
  // runs if error occured
}
//=================================================================
try {
  let res = 10;
  console.log(rest);
} catch (err) {
  console.log("An log occurred:");
  console.log(err.name);
  console.log(err.message);
  console.log(err);
}
// ===============================================================
try {
  console.log("Code runs successfully.");
} catch (err) {
  console.log("Inside catch block: An error occurred.");
} finally {
  console.log("No matter what happens in the try or catch blocks, the finally block will always execute, making it ideal for important cleanup actions in your code.");
}
// =================================================================
  