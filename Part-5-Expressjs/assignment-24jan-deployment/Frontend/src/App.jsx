import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Notes } from "./components/Dashboard";
import { CreateNote } from "./components/CreateNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/createnote" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  