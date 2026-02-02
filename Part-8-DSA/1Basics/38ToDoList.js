// const prompt = require("prompt-sync")(); // to run in node
const toDoItems = [];
let exit = false;
while (!exit) {
  let usersChoice = prompt(`You have below options
1. Press 1 to add To Do item
2. Press 2 to see all the items
3. Press 3 to remove an item
4. Exit
`);
  // Add proper validation
  usersChoice = parseInt(usersChoice); // to take input as number
  console.log(usersChoice); // number

  switch (
    usersChoice // based on number switch case
  ) {
    case 1:
      console.log("Addition");
      const userItem = prompt("Please enter the To Do item: ");
      toDoItems.push(userItem);
      console.log(toDoItems);
      break;
    case 2:
      printAllItems();
      break;
    case 3:
      printAllItems();
      let itemToDelete = prompt(
        "Please tell the item number that you want to delete: ",
      );
      // Add proper validation. check if itemToDelete is a number and it exists
      itemToDelete = parseInt(itemToDelete); // item number to be deleted
      console.log("Before delete", toDoItems);
      toDoItems.splice(itemToDelete - 1, 1); // -1 because indexing starts at 0
      console.log("After delete", toDoItems);
      break;
    case 4:
      exit = true;
      break;
    default:
      break;
  }
}

function printAllItems() {
  let counter = 1;
  toDoItems.forEach((item) => {
    console.log(`${counter}. ${item}`);
    counter++;
  });
}
console.log("Thanks for using the TODO list app");
