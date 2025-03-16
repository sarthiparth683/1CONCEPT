import { produce } from "immer"
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, RECEIVE_TASK, REQUEST_TASK, ERROR_TASK } from "./actionTypes"

const initialState = {
    tasks:[],
    loading:false,
    error:null
}

export const taskReducer = produce((draft, action)=>{
    switch(action.type){
        case ADD_TASK:
            draft.tasks.push(action.payload)
            break
        case TOGGLE_TASK:
            const task = draft.tasks.find(task => task.id === action.payload)
            task.completed = !task.completed
            break
        case DELETE_TASK:
            draft.tasks = draft.tasks.filter(task => task.id !== action.payload)
            break
        case REQUEST_TASK:
            draft.loading = true
            break
        case RECEIVE_TASK:
            draft.tasks = action.payload
            draft.loading = false
            break
        case ERROR_TASK:
            draft.error = action.payload
            draft.loading = false
            break
        default:
            return draft
    }  
},initialState)