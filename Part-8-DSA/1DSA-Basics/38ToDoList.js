const toDoItems = [];
let exit = false;

while (!exit) {
  let usersChoice = prompt(`You have below options
1. Press 1 to add To Do item
2. Press 2 to see all the items
3. Press 3 to remove an item
4. Exit
`);

  usersChoice = parseInt(usersChoice); 

  switch (usersChoice) {
    case 1:
      console.log("Addition");
      const userItem = prompt("Please enter the To Do item: ");
      toDoItems.push(userItem);
      break;
    case 2:
      printAllItems();  
      break;
    case 3:
      printAllItems();
      let itemToDelete = prompt(
        "Please tell the item number that you want to delete: ",
      );
      itemToDelete = parseInt(itemToDelete);
      console.log("Before delete", toDoItems);
      toDoItems.splice(itemToDelete - 1, 1); 
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

console.log("Thanks for using the TO-DO list app");
