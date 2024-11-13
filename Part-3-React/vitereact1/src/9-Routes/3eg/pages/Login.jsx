import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [text, setText] = useState({ email: "", password: "" });
  const { auth, Login, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://reqres.in/api/login", text)
      .then((res) => {
        setLoading(false);
        Login(res.data.token);
        navigate("/employee")
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };
console.log(auth);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="button"
          style={{ background: "red",
             border: "none",
              color: "white", 
              cursor:"pointer",
              borderRadius:"6px",
              padding:"4px"
             }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
