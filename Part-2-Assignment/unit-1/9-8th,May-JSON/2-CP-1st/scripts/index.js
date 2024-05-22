let addTodoButton = document.getElementById("addBtn");
let tableBody = document.getElementById("todoTableBody");
let inputTitle = document.getElementById("todoName");
let prioritySelect = document.getElementById("priority");

//selecting addTodoButton and adding functionality
addTodoButton.addEventListener("click", function () {
    // JSON.parse - converts-JSON String into js-obj
    // here we are getting data from localstoragae and then parsing
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    if (inputTitle.value == "") {
        alert(`Todo cannot be empty!`)
    } else { 
        // object is created key and value(taken form above variable) pair
        let Singletodo = {
            name: inputTitle.value,
            priority: prioritySelect.value,
            status: "Pending🔃"
        }
        todos.push(Singletodo);  // data is pushed into todos to localStorage.setItem
        // JSON.stringify-Converts objects into JSON (JavaScript Object Notation)
        localStorage.setItem("todos", JSON.stringify(todos));
        alert(`Todos added successfully`);
    }

});

function displayTodo(arr) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    tableBody.innerHTML = ""
    arr.map((el, i) => {
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let statusbtn = document.createElement("button");
        statusbtn.textContent = el.status;
        statusbtn.class = "toggle";
        statusbtn.addEventListener("click", function () {
            if (el.status == `Pending🔃`) {
                el.status = `Completed✅`
            } else {
                el.status = `Pending🔃`;
            }
            localStorage.setItem("todos", JSON.stringify(arr));
            displayTodo(arr);
        });

        let archiveBtn = document.createElement("button");
        archiveBtn.textContent = "Archive";
        archiveBtn.class = "archiveBtn";
        archiveBtn.addEventListener("click", function(){
            let filteredData = arr.filter((ele,index)=> {
                return index !=i;
            });
            let archive = JSON.parse(localStorage.getItem("archive")) || [];
            archive.push(el);
            localStorage.setItem("archive", JSON.stringify(archive));
            localStorage.setItem("todos", JSON.stringify(filteredData));
            displayTodo(filteredData); 
        })
        td1.innerText = el.name;
        td2.innerText = el.priority;
        td3.append(statusbtn);
        if (el.priority == "medium") {
            td2.style.backgroundColor = `rgb(255,255,0)`;
        } else if (el.priority == "high") {
            td2.style.backgroundColor = `rgb(255,0,0)`;
        }
        td4.append(archiveBtn);
        let tr = document.createElement("tr");
        tr.append(td1, td2, td3,td4);
        tableBody.append(tr); // tableBody variable is  created in line:2
    })
};
let todos = JSON.parse(localStorage.getItem("todos")) || [];
displayTodo(todos); 