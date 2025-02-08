import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle user registration
  const handleRegister = () => {
    const payload = { name, email };
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        fetchUsers(); // Refresh data after signup
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>SignUp</h1>
      <input type="text" 
      placeholder="Enter Name" 
      value={name} 
      onChange={(e) => setName(e.target.value)} />
      <br /> <br />
      <input type="text" 
      placeholder="Email"   
      value={email} 
      onChange={(e) => setEmail(e.target.value)} />
      <br /> <br />
      <button onClick={handleRegister}>SignUp!</button>
    </div>
  );
};

export default SignUp;
  