import React from "react";

const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <> 
      <li className="todo-item">
        <span  className={checked ? "checkList" : "notCheckList"} >{data}</span>
        <button className="check-btn"  onClick = {() => onHandleCheckedTodo(data)} >Check</button>
        <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
          Delete
        </button>  
      </li>
    </>
  );
};

export default TodoList;
