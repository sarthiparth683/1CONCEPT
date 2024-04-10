// we know that the function will receive an object with keys firstName & lastName

function printFullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
  }
  
  printFullName({
    firstName: "Vivek",
    lastName: "Agarwal",
  });
  
  //-> Vivek Agarwal
  