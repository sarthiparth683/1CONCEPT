// let allows you to declare variables that are block-scoped, meaning they exist only within the block they are defined in.
// Unlike var, which is function-scoped, let is limited to the block, statement, or expression where it's defined.  

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
let name1 = "Alice";
console.log(name1); // Outputs: Alice
let age = 25;

if (true) {
    let age = 30;
    console.log(age); // Outputs: 30 (because this 'age' is inside the block)
}

console.log(age); // Outputs: 25 (because this 'age' is outside the block)