//---------------------------------------------------------------
// Playing around with JWT in the rest-client
// ### Sign up / create an account / register a user

// POST http://127.0.0.1:9090/register
// Content-Type: application/json

// {
//   "username": "babu",
//   "firstname": "babu",
//   "lastname": "bhai",
//   "email": "babu@bhai.com",
//   "password": "babu123",
//   "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg",
//   "userLevel": 2
// }

// ### Login / sign-in

// POST http://127.0.0.1:9090/login
// Content-Type: application/json

// {
//   "username": "babu",
//   "password": "babu123" 
// }

// ### Making authenticated requests / accessing protected routes

// GET http://127.0.0.1:9090/todos
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJhYnUiLCJwYXNzd29yZCI6IiQyYiQxMCRJc3NBLmJZaG5Qalh5cG9PNkF0VFVPbXdvRjQ2aWM4OFhUOE96MU50Y3pZVEl0WnF1WGg1ZSIsImVtYWlsIjoiYmFidUBiaGFpLmNvbSIsImZpcnN0bmFtZSI6ImJhYnUiLCJsYXN0bmFtZSI6ImJoYWkiLCJhdmF0YXIiOiJodHRwczovL2Nsb3VkZmxhcmUtaXBmcy5jb20vaXBmcy9RbWQzVzVEdWhnSGlyTEhHVml4aTZWNzZMaENrWlV6NnBuRnQ1QUpCaXl2SHllL2F2YXRhci83NjIuanBnIiwiY3JlYXRlZEF0IjoxNjc4OTUwMTk2ODQ5LCJpZCI6NTYsImlhdCI6MTY3ODk1MDI0NSwiZXhwIjoxNjc4OTYxMDQ1fQ.cXZsLFywHA5_J0HMwf7LZRl6Kazkts0qLdr7l9PibvE

//---------------------------------------------------------------
// Implement them in the code  
async function createData(){
    try {
      let res = await fetch(`http://localhost:9090/todos`, {
        method: 'POST',
        headers: { 
          'Content-type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0bmFtZSI6IkFkIiwibGFzdG5hbWUiOiJNaW5pc3RlciIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRsTG01THA0MHVCUjlDVXJabjU4Q2RPbDh5dTVHcDJ1bUFPLjZseS52V2NaMGEwdlVLc0hpQyIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzc2Mi5qcGciLCJ1c2VyTGV2ZWwiOjQsImNyZWF0ZWRBdCI6MTY3MDE2NTk4MDYzOCwiaWF0IjoxNjcwNDg3NDMwLCJleHAiOjE2NzA1MDkwMzB9.VtoT7t0WMMtfBAgiB8WowRi43yQOSQ0hsOhuB2OJ5WQ`
        },
        body: JSON.stringify({
          userId: 48,
          title: "New loyal Minskin",
          completed: false
        })
      });
      if (res.ok) {
        let data = await res.json();
        return data;
      } else {
        return `server responded with a ${res.status} error.`
      }
    } catch (error) {
      return 'error';
    }
  }
  
  // createData().then(dat => console.log(dat));
  
//---------------------------------------------------------------
// Class Code:   
loginUserButton.addEventListener("click",userLogin);
getTodoButton.addEventListener("click",fetchTodos);

function userLogin(){

  let user_data = {
    username: loginUserUsername.value,
    password: loginUserPassword.value
  }

  fetch(userLoginURL,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(user_data)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    localStorage.setItem("token",JSON.stringify(data.accessToken));
    localStorage.setItem("userID",JSON.stringify(data.user.id));
  })
  .catch(err =>{ console.log(err)});

}



async function fetchTodos(){

  try{
    let userId = JSON.parse(localStorage.getItem("userID"));
    let token = JSON.parse(localStorage.getItem("token"));
    let res = await fetch(`${baseServerURL}/todos?userId=${userId}`,{
      method:"GET",
      headers:{
        "Authorization":`Bearer ${token}`,
      }
    });

    let data = await res.json();
    console.log(data);
 
  }
  catch(err){
    console.log(err);
  }

 
}
//-------------------------------------------------------------------------------------