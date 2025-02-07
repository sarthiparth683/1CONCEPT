import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Notes } from "./components/Dashboard";
import { CreateNote } from "./components/CreateNote";

function App() {
  return (
    <Router>
      <nav style={{ marginTop: "0px", display: "flex", gap: "20px", padding: "10px", backgroundColor: "#f8f9fa" }}>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/createnote">Create Note</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/createnote" element={<CreateNote />} />
      </Routes>
    </Router>
  );
}

export default App;
  