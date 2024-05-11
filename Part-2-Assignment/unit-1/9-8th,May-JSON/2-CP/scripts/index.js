let addTodoButton = document.getElementById("addBtn");
let tableBody = document.getElementById("todoTableBody");
let inputTitle = document.getElementById("todoName");
let prioritySelect = document.getElementById("priority");  

addTodoButton.addEventListener("click", (e)=>{
    e.preventDefault(); // to prevent refresh
    let todo = {
        title: inputTitle.value,
        priority: prioritySelect.value,
        status: "Pending"
    }
})