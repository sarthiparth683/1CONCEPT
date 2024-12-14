import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./todoSlice";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Todo List</h1>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a todo" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            {todo.text} <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
