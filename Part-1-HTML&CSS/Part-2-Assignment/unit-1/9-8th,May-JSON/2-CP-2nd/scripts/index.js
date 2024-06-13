let addTodoButton = document.getElementById("addBtn");
let tableBody = document.getElementById("todoTableBody");
let inputTitle = document.getElementById("todoName");
let prioritySelect = document.getElementById("priority");

addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = {
        title: inputTitle.value,
        priority: prioritySelect.value,
        status: "Pending🔃"
    }
    if (todo.title == "") {
        alert("Todo cannot be empty!");
    }

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    appendData();
});

function appendData() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    tableBody.innerHTML = "";
    todos.forEach((todo, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.innerText = todo.title;
        td2.innerText = todo.priority;

        if (todo.priority == "medium") {
            td2.style.backgroundColor = "rgb(255,255,0)";
        } else if (todo.priority == "high") {
            td2.style.backgroundColor = "rgb(255,0,0)";
        }

        let toggleButton = document.createElement("button");

        toggleButton.className = "toggle";
        toggleButton.innerText = todo.status;

        toggleButton.addEventListener("click", () => {
            if (todo.status == "Pending🔃") {
                todos[index].status = "Completed✅";
            } else {
                todos[index].status = "Pending🔃";
            }

            localStorage.setItem("todos", JSON.stringify(todos));
            appendData();
        });


        let removeButton = document.createElement("button");
        removeButton.className = "archiveBtn";
        removeButton.innerText = "Archive";

        removeButton.addEventListener("click", () => {
            let archive = JSON.parse(localStorage.getItem("archive")) || [];
            let todos = JSON.parse(localStorage.getItem("todos")) || [];
            archive.push(todos.splice(index, 1)[0]);
            localStorage.setItem("todos", JSON.stringify(todos));
            localStorage.setItem("archive", JSON.stringify(archive));
            appendData();
        })

        td4.append(removeButton);

        td3.append(toggleButton);

        tr.append(td1, td2, td3,td4); 
        tableBody.append(tr); 

    })
};

appendData();