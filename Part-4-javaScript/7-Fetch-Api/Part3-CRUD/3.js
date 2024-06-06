< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
                #navbar {
                    display: flex;
      }
                #form,
                #form1 {
                    display: flex;
                flex-direction: column;
                gap: 30px;
                width: 50%;
                margin: auto;
                padding: 30px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
                #cont {
                    display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
      }
      #cont > div {
                    border: 1px solid black;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                padding: 20px;
      }
            </style>
        </head>
        <body>
            <!-- <input type="text" placeholder="Search Users">
                you need to do these
                <button>Search</button> -->
                <div id="navbar">
                    <form id="form1" action="" onSubmit="updateUserfn()">
                        <h4>Update User Here</h4>
                        <input id="name1" type="text" placeholder="enter name" />
                        <input id="email1" type="email" placeholder="enter email" />
                        <input id="userId" style="display: none" />

                        <input type="submit" value="Update" />
                    </form>
                    <!-- <form id="form" action="" onSubmit="signupfn()">
                        <h4>Please Signup</h4>
                        <input id="name" type="text" placeholder="enter name" />
                        <input id="email" type="email" placeholder="enter email" />
                        <input id="password" type="password" placeholder="enter password" />
                        <input type="submit" value="Signup" />
                    </form> -->
                </div>
                <!-- <button onclick="getuserfn()">Get User</button> -->
                <div id="cont"></div>
        </body>
        <script>
            let baseUrl = `http://localhost:3000`
            getuserfn();
            function signupfn() {
                let form = document.getElementById("form");
            event.preventDefault();
            let name = form.name.value;
            let email = form.email.value;
            let password = form.password.value;
      // console.log({name, email, password})
            let userData = {name, email, password};
            // i need to send this data to the backend
            fetch(`${baseUrl}/users`, {
                method: "POST",
            headers: {
                "content-type": "application/json",
        },
            body: JSON.stringify(userData),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

            async function getuserfn() {
                let res = await fetch("http://localhost:3000/users");
            let data = await res.json();
            //console.log(data)
            displayData(data);
    }

            function displayData(arr) {
                let cont = document.getElementById("cont");
            cont.innerHTML = null;
      arr.map((el, i) => {
                let card = document.createElement("div");
            let img = document.createElement("img");
            img.src =
            "data:image/jpeg;base64,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";
            let name = document.createElement("h3");
            name.textContent = `name: ${el.name}`;

            let email = document.createElement("h3");
            email.textContent = `email: ${el.email}`;
            let updateBtn = document.createElement("button");
            updateBtn.textContent = "Update";
            updateBtn.addEventListener("click", function () {
                updatefn(el);
        });
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function () {
                deletefn(el);
        });
            card.append(img, name, email, updateBtn, deleteBtn);
            cont.append(card);
      });

            async function deletefn(el) {
                let res = await fetch(`http://localhost:3000/users/${el.id}`, {
                method: "DELETE",
        });

            console.log(res);
            getuserfn();
      }
            async function updatefn(el) {
                //console.log(`http://localhost:3000/users/${el.id}`);
                let res = await fetch(`http://localhost:3000/users/${el.id}`);
            let user = await res.json();

            //user.name = "Ashok Kumar Dhinda"
            console.log(user);
            let form1 = document.getElementById("form1");
            form1.name1.value = user.name;
            form1.email1.value = user.email;
            form1.userId.value = user.id;
      }
    }

            function updateUserfn() {
                event.preventDefault();
            let form1 = document.getElementById("form1");
            let name = form1.name1.value;
            let email = form1.email1.value;
            let id = form1.userId.value;
            let updatedUser = {name, email};
      //console.log({name, email})

            fetch(`http://localhost:3000/users/${id}`, {
                method: "PUT",
            headers: {
                "content-type": "application/json",
        },
            body: JSON.stringify(updatedUser),
      })
        .then((res) => console.log(res))
        .catch((err) => {
                console.log(err);
        });

            getuserfn();
    }
        </script>
    </html>
