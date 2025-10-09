import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, REQUEST_TASK, RECEIVE_TASK, ERROR_TASK } from "./actionTypes"
import axios from "axios"

//sync actions

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}

export const toggleTask = (taskId) => { 
    return {
        type: TOGGLE_TASK,
        payload: taskId
    }
}

//async actions

export const fetchTasks = () => {
    return async (dispatch) => {
        try {
            dispatch({type: REQUEST_TASK})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            dispatch({type: RECEIVE_TASK, payload: response.data})
        } catch(error) {
            dispatch({type: ERROR_TASK, payload: error})
        }
    }
}


