import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { auth, login } = useContext(AuthContext);
  let URL = "https://reqres.in/api/login";
  //npm i axios - to install axios then import axios

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    axios.post(URL, data).then((res) => {
      console.log(res.data);
      login(res.data.token);
    });
  }; 

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
