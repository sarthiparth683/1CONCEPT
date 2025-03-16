import { legacy_createStore, combineReducers, applyMiddleware } from "redux"
import taskReducer from "./taskReducer"
import logger from "redux-logger"
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
    task: taskReducer
})

const middleware = applyMiddleware(thunk, logger)

const store = legacy_createStore(rootReducer, middleware)

export default store  