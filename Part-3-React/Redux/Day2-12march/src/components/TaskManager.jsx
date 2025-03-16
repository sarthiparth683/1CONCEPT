import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const TaskManager = () => {
    const [taskInput, setTaskInput] = useState("")
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)


    const handleAddTask = () => {
        if(taskInput.trim() === "") {
            return
        }
        dispatch({type: "ADD_TASK", payload: taskInput})
        setTaskInput("")
    }

    const handleToggle = (id) => {
        dispatch({type:"TOGGLE_TASK", payload: id})
    }
   
    const handleRemove = (id) => {
        dispatch({type:"DELETE_TASK", payload: id})
    }
    return (
        <div>
            <h2>Task Manager App</h2>
            <input type="text" value={taskInput} onChange={(e)=> setTaskInput(e.target.value)} placeholder="Enter Task"/>
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task)=>{
                    return (
                        <li key={task.id} style={{ textDecoration: task.completed ? "line-through": "none"}}>
                            {task.text}
                            <button onClick={()=>{handleToggle(task.id)}}>
                                {task.completed ? "Undo":"Completed"}
                            </button>
                            <button onClick={()=>{handleRemove(task.id)}}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskManager