import { taskReducer } from "./taskReducer"
import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import logger from "redux-logger"

const middleware = applyMiddleware(thunk, logger)

const rootReducer = combineReducers({
    tasks: taskReducer
})

export const store = legacy_createStore(rootReducer, middleware)  